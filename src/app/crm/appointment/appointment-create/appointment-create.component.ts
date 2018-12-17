import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from 'app/shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormDataService} from 'app/shared/services/form-data.service';
import {ShareService} from 'app/shared/services/share.service';
import {NotifyService} from 'app/shared/services/notify.service';
import {DataService, Person} from 'app/shared/services/data.service';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.scss']
})
export class AppointmentCreateComponent implements OnInit {


  people: Person[] = [];
  selectedPeople = [];
  active= 'today';
  appoint_data: FormGroup;
  appoint: FormGroup;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
	id: any = "new";
  constructor(
    private dataService: DataService,
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  )
  {
    this.shareService.setVisibility(false)
    this.appoint_data= this.fb.group({
      "address_id":['new',Validators.required],
      "id":['new',Validators.required],
      "title":['',Validators.required],
      "attendees":['',Validators.required],
      "from_date":['',Validators.required],
      "from_time":['',Validators.required],
      "to_date":['',Validators.required],
      "to_time":['',Validators.required],
      "outcome":['',Validators.required],
      "where":['',Validators.required],
      "related_to":['',Validators.required],
      "description":['',Validators.required],
    });
    this.resetErrorMessages();
  }

  ngOnInit() {
     this.apiService.get('admin/crm/lead_full_list')
      .then(data => {
        let l_data:any = data;
        this.selectedPeople = l_data.data;
        console.log(this.selectedPeople)
      });
    // this.dataService.getPeople()
    // .pipe(map(x => x.filter(y => !y.disabled)))
    // .subscribe((res) => {
    //     this.people = res;
    //     this.selectedPeople = [this.people[0].id, this.people[1].id];
    // });

    this.route.params.subscribe(params => {
      console.log(params['id']);
			if(params['id']=='new'){
				this.id="new";
			}else{
				this.id = +params['id']; // (+) converts string 'id' to a number
        this.getData(this.id);
			}
    });


  }

  getData(id:any){
		this.apiService.get("admin/appoint/"+id)
		.then(data => {
			let l_data: any = data;
      this.appoint_data.patchValue(l_data.data);
      console.log(this.appoint_data.value)
		})
	}
  addOrUpdate(appoint){
		this.formTouched = true;
		console.log(appoint.value);
		if(appoint.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;

			//post request
			this.apiService.post("admin/crm/appointment",appoint.value).then( data => {
        let result: any = data;
        //success
        console.log(result);
        this.isProcessing = false;
        if(result.status)
							{
								this.notifyService.show({
									title: 'Success',
									message: result.message
								},'success');
							}
							else{
									this.notifyService.show({
										title: 'Error',
										message: result.message
                  }, 'error');
                  this.errors = result.error;
							}

			})
			.catch( error => {
        this.isProcessing = false;
        let errors: any = error;
        this.errors = errors;
			})

  }
  resetErrorMessages(){
		this.errors = {
      "title": [""],
      "from_date":[""],
      "from_time":[""],
      "to_date":[""],
      "to_time":[""],
      "outcome":[""],
      "where":[""],
      "related_to":[""],
      "description":[""],
		}
  }

  cancel(){
    this.router.navigateByUrl('/crm/appoint/create');
  }

}
