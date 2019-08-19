import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'app/shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from 'app/shared/services/form-data.service';
import { ShareService } from 'app/shared/services/share.service';
import { NotifyService } from 'app/shared/services/notify.service';
import { state, style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-lead-create',
  templateUrl: './lead-create.component.html',
  styleUrls: ['./lead-create.component.scss'],
  animations: [
    trigger('fade', [
      state('void, hidden', style({
        transform: "scale(0)"
      })),
      state('visible', style({ opacity: 1 })),
      transition('void <=> *', [
        animate(150)
      ])
    ])
  ]
})
export class LeadCreateComponent implements OnInit {
  active: string = 'today';
  lead_data: FormGroup;
  Lead: FormGroup;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = "new";
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router: Router,
  ) {
    this.shareService.setVisibility(false)
    this.lead_data = this.fb.group({
      "id": ['new', Validators.required],
      "company_name": ['', Validators.required],
      "source": ['', Validators.required],
      "latitude": [''],
      "longitude": [''],
      "assigned_to": ['', Validators.required],
      "lead_status": ['', Validators.required],
      "product": ['', Validators.required],
      "contact_persons": this.fb.array([
        this.createContactGroup()
      ]),
      "company_info": this.fb.group({
        "company_employee_number": [''],
        "company_annual_revenue": [''],
        "company_website": [''],
        "company_phone": [''],
        "company_industry_type": [''],
        "company_business_type": [''],
      }),
      "address": this.fb.group({
        "address_id": ['new', Validators.required],
        "building": [''],
        "road_name": [''],
        "landmark": [''],
        "pincode": [''],
        "country": [''],
        "state": [''],
        "city": [''],
      }),
      "social": this.fb.group({
        "facebook_link": [' '],
        "twitter_link": [''],
        "linkedin_link": [''],
      }),
      "deal": this.fb.group({
        "deal_name": [''],
        "deal_value": [''],
        "deal_expected_close_date": [''],
        "deal_product": [''],
      }),
      "source_info": this.fb.group({
        "campaign": [''],
        "medium": [''],
        "keyword": [''],
      }),
    });
    this.resetErrorMessages();
  }
  createContactGroup() {
    return this.fb.group({
      "name": ['', Validators.required],
      "email": ['', [Validators.required, Validators.email]],
      "designation": [''],
      "primary_contact_number": ['', Validators.required],
      "secondary_contact_number": ['']
    })
  }
  addContactGroup() {
    this.contactsFormArray.push(this.createContactGroup());
    console.log({ "formArray": this.contactsFormArray })
  }
  removeContact(index) {
    this.contactsFormArray.removeAt(index);
  }
  //All the getters to the form
  get companyName() {
    return this.lead_data.controls.company_name
  }
  get contactsFormArray() {
    return this.lead_data.controls.contact_persons as FormArray;
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log(params['id'])
      if (params['id'] == 'new') {
        this.id = "new";
        navigator.geolocation.getCurrentPosition((position) => {
          console.log("Got position", position.coords);
          this.lead_data.value.latitude = position.coords.latitude;
          this.lead_data.value.longitude = position.coords.longitude;
        });
      } else {
        this.id = +params['id']; // (+) converts string 'id' to a number
        this.getData(this.id);
      }
    });


  }

  getData(id: any) {
    this.apiService.get("admin/crm/leads/" + id)
      .then(data => {
        let l_data: any = data;
        this.lead_data.patchValue(l_data.data);
        console.log(this.lead_data.value)
      })
  }
  addOrUpdate(lead) {
    this.formTouched = true;
    this.resetErrorMessages();
    this.isProcessing = true;

    console.log(lead);
    //post request
    this.apiService.post("admin/crm/leads", lead.value).then(data => {
      let result: any = data;
      //success
      console.log(result);
      this.isProcessing = false;
      if (result.status) {
        this.notifyService.show({
          title: 'Success',
          message: result.message
        }, 'success');
      }
      else {
        this.notifyService.show({
          title: 'Error',
          message: result.message
        }, 'error');
        this.errors = result.error;
      }

    })
      .catch(error => {
        this.isProcessing = false;
        let errors: any = error;
        this.errors = errors;
      })

  }
  resetErrorMessages() {
    this.errors = {
      "ca_company_name": [""],
      "company_name": [""],
      "first_name": [""],
      "last_name": [""],
      "email": [""],
      "primary_contact_number": [""],
      "assigned": [""],
      "lead_status": [""],
      "company_employee_number": [""],
      "company_annual_rev": [""],
      "company_website": [""],
      "company_phone": [""],
      "industry_type": [""],
      "business_type": [""],
      "lead_address_building": [""],
      "lead_address_road_name": [""],
      "lead_address_landmark": [""],
      "lead_address_pincode": [""],
      "lead_address_country": [""],
      "lead_address_state": [""],
      "lead_address_city": [""],
      "facebook_link": [""],
      "twitter_link": [""],
      "linkedin_link": [""],
      "deal_name": [""],
      "deal_value": [""],
      "deal_expected_close_date": [""],
      "product": [""],
      "source": [""],
      "campaign": [""],
      "medium": [""],
      "keyword": [""],
    }
  }

  canDeactivate() {
    if (this.lead_data.dirty) {
      return confirm("Are You Sure you want to Discard the changes?");
    }
    else {
      return true;
    }
  }
  cancel() {
    this.router.navigateByUrl('/crm/lead/create');
  }

}
