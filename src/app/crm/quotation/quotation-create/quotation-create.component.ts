import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from 'app/shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormDataService} from 'app/shared/services/form-data.service';
import {ShareService} from 'app/shared/services/share.service';
import {NotifyService} from 'app/shared/services/notify.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-quotation-create',
  templateUrl: './quotation-create.component.html',
  styleUrls: ['./quotation-create.component.scss']
})
export class QuotationCreateComponent implements OnInit {

  active = 'today';
  debug = true;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = 'new';
  quotation_data: FormGroup;
  //table Variables
  fieldArray: Array<any> = [];   //Holds Table Data
  newAttribute: any = {};
  closeResult: String;
  accounts: any;
  //products
  products: any;
  product: any = {
    'product_rate': 0,
    'gst_rate': 0,
  };
  //Form Fields
  gross_amount: number = 0;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router: Router,
  ) {
    this.quotation_data = fb.group({
      'address_id': ['new', Validators.required],
      'id': ['new', Validators.required],
      'customer_name': ['', Validators.required],
      'customer_address': ['', Validators.required],
      'quotation_date': ['', Validators.required],
      'quotation_validity': ['', Validators.required],
      'delivery_at': ['', Validators.required],
      'transporter_name': ['', Validators.required],
      'eway_bill': ['', Validators.required],
      'gross_amount': ['', Validators.required],
      'discount_value': ['', Validators.required],
      'discount_in': ['', Validators.required],
      'del_charges': ['', Validators.required],
      'grand_total': ['', Validators.required],
      'product_name': ['', Validators.required],
      'product_qty': ['', Validators.required],
      'product_rate': ['', Validators.required],
      'product_discount_in': ['', Validators.required],
      'product_discount_value': ['', Validators.required],
      'product_applied_gst_percentage': ['', Validators.required],
      'product_applied_gst_rate': ['', Validators.required],
      'product_sub_total': ['', Validators.required],
    })
  }

  ngOnInit() {
    // 2 Starts
    this.getAccounts();
    this.getProducts();
    this.route.params.subscribe(params => {
      console.log(params['id']);
      if (params['id'] == 'new') {
        this.id = 'new';
      } else {
        this.id = +params['id']; // (+) converts string 'id' to a number
        this.getData(this.id);
      }
    });
    // 2 Ends
  }

  getProducts() {
    this.apiService.get('admin/raw_product_full_list').then((data: any) => {
      this.products = data.data;
    })
      .catch((error: any) => {
        console.log(error);
      });
  }

  getAccounts() {
    this.apiService.get('admin/crm/appointment_full_list').then((data: any) => {
      this.accounts = data.data;
    })
      .catch((error: any) => {
        console.log(error);
      });
  }

  // 3 Starts
  getData(id: any) {
    this.apiService.get('admin/crm/quotation/' + id)
      .then(data => {
        let l_data: any = data;
        this.quotation_data.patchValue(l_data.data);
      })
  }

  addOrUpdate(quotation) {
    // this.notifyService.show({
    //   title: 'Success',
    //   message: 'Done'
    // }, 'success');
    quotation.addControl('quotation_table', new FormControl(this.fieldArray));
    console.log(quotation.value);
    this.formTouched = true;
    // if (quotation.invalid) {
    //   return false;
    // }
    this.resetErrorMessages();
    this.isProcessing = true;

    //post request
    this.apiService.post('admin/crm/quotation', quotation.value).then(data => {
      console.log(data);

      let result: any = data;
      //success
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
      }

    })
      .catch((error: any) => {
        this.isProcessing = false;
        let errors: any = error;
        this.errors = errors;
      })

  }

  resetErrorMessages() {
    this.errors = {
      'customer_name': [''],
      'customer_address': [''],
      'quoation_date': [''],
      'quotation_validity': [''],
      'delivery_at': [''],
      'transporter_name': [''],
      'eway_bill': [''],
      'gross_amount': [''],
      'discount_value': [''],
      'discount_in': [''],
      'del_charges': [''],
      'grand_total': [''],
      'product_name': [''],
      'product_qty': [''],
      'product_rate': [''],
      'product_discount_in': [''],
      'product_discount_value': [''],
      'product_applied_gst_percentage': [''],
      'product_applied_gst_rate': [''],
      'product_sub_total': [''],
    }
  }

  cancel() {
    this.router.navigateByUrl('/dashboard/crm/quotation/new');
  }

// 3 Ends
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getDismissReason(reason) {

  }

  addFieldValue() {
    this.calculate_total_individual_price();
    this.fieldArray.push(this.newAttribute);
    this.update_gross_amount();
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
    this.update_gross_amount();
  }

//Updation Methods
  update_model_price(product) {
    this.newAttribute.product_rate = product.product_mrp_rate;
    this.newAttribute.product_gst_percent = product.tax_rate;
  }

  calculate_total_individual_price() {
    let total_price = 0;
    this.newAttribute.total_price = Number(this.newAttribute.product_qty * this.newAttribute.product_rate *
      (1 + this.newAttribute.product_gst_percent / 100)).toFixed(2);
  }
  update_gross_amount() {
    this.gross_amount = 0;
    for (let i = 0; i < this.fieldArray.length; i++) {
      this.gross_amount += Number(this.fieldArray[i].total_price);
    }
  }
  update_total(event){
    console.log(event);
  }
}





