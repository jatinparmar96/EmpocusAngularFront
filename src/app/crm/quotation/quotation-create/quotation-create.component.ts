import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ApiService
} from 'app/shared/services/api.service';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  FormDataService
} from 'app/shared/services/form-data.service';
import {
  ShareService
} from 'app/shared/services/share.service';
import {
  NotifyService
} from 'app/shared/services/notify.service';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';
import {
  ProductService
} from '../../../shared/services/ProductService/product.service';


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
  fieldArray: Array < any > = []; //Holds Table Data
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
  amount = {
    'gross_amount': 0,
    'total_amount': 0,
    'grand_total_amount': 0,
  };
  cgst: any = 0;
  sgst: any = 0;
  igst: any = 0;
  discount: any = {
    'type': '%',
    'value': 0
  };
  delivery_charges: any = 0;


  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private productService: ProductService,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router: Router,
  ) {
    /*this.productService.get_products_list().subscribe((data: any)=>{
       this.products = data.data;
       console.log(this.products,data);
    });*/
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
      'cgst': ['0', Validators.required],
      'sgst': ['', Validators.required],
      'igst': ['', Validators.required],
      'total': ['', Validators.required],
      'product_name': ['', Validators.required],
      'product_qty': ['', Validators.required],
      'product_rate': ['', Validators.required],
      'product_discount_in': ['', Validators.required],
      'product_discount_value': ['', Validators.required],
      'product_applied_gst_percentage': ['', Validators.required],
      'product_applied_gst_rate': ['', Validators.required],
      'product_sub_total': ['', Validators.required],
    })
    this.resetAttributes();
  }

  ngOnInit() {
    // 2 Starts

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
        let data: any = {
          'title': 'Some Error Occurred',
          'message': 'Product list cannot be loaded'
        };
        this.notifyService.show(data, 'error');
      });
  }

  getAccounts() {
    this.apiService.get('admin/crm/accounts_full_list').then((data: any) => {
        this.accounts = data.data;
      })
      .catch((error: any) => {
        console.log(error);
        let data: any = {
          'title': 'Some Error Occurred',
          'message': 'Accounts list cannot be loaded'
        };
        this.notifyService.show(data, 'error');
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
    quotation.addControl('quotation_table', new FormControl(this.fieldArray));
    // console.log(quotation.value);
    this.formTouched = true;
    this.resetErrorMessages();
    this.isProcessing = true;

    //post request
    this.apiService.post('admin/crm/quotation', quotation.value).then(data => {
        let result: any = data;
        //success
        this.isProcessing = false;
        if (result.status) {
          this.notifyService.show({
            title: 'Success',
            message: result.message
          }, 'success');
        } else {
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
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getDismissReason(reason) {

  }
  calculateAmount() {
    this.newAttribute.amount = this.newAttribute.product_qty * this.newAttribute.product_rate;
    console.log(this.newAttribute);
  }
  addFieldValue() {
    this.calculate_total_individual_price();
    this.fieldArray.push(this.newAttribute);
    this.update_gross_amount();
    this.newAttribute = {};
    this.newAttribute = {
      'product_rate': 0,
      'product_gst_percent': 0
    };
    console.log(this.fieldArray);

  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
    this.update_gross_amount();
  }

  resetAttributes() {
    this.newAttribute = {
      product_rate: 0,
      product_gst_percent: 0,
      amount: 0
    }
  }
  //Updation Methods
  update_model_price(product) {
    this.newAttribute.product_rate = product.product_mrp_rate;
    this.newAttribute.product_gst_percent = product.tax_rate;
    this.newAttribute.amount = this.newAttribute.product_rate * this.newAttribute.product_qty
  }

  calculate_total_individual_price() {
    let total_price = 0;
    this.newAttribute.total_price = (Number(this.newAttribute.product_qty * this.newAttribute.product_rate)).toFixed(2);
  }

  update_gross_amount() {
    this.amount.gross_amount = 0;
    for (let i = 0; i < this.fieldArray.length; i++) {
      this.amount.gross_amount += Number(this.fieldArray[i].total_price);
      this.quotation_data.value.cgst += this.fieldArray[i].product_qty * this.fieldArray[i].product_rate * this.fieldArray[i].product_gst_percent / 100;
    }
    this.quotation_data.value.cgst = this.quotation_data.value.cgst / 2;
    this.quotation_data.value.sgst = this.quotation_data.value.cgst;
    this.amount.total_amount = this.amount.gross_amount;
    this.amount.grand_total_amount = Number(this.amount.total_amount) + Number(this.delivery_charges);
  }

  update_grand_total(delcharge) {
    this.delivery_charges = delcharge;
    this.amount.grand_total_amount = Number(this.amount.total_amount) + Number(this.delivery_charges);
  }

  updateTotal()
  {
    let gross_amount = this.quotation_data.value.gross_amount;
    let total = this.quotation_data.value.total;

  }
  update_total(discount) {
    if (this.discount.type === '%') {
      this.amount.total_amount = this.amount.gross_amount - (this.amount.gross_amount * discount / 100);
    } else if (this.discount.type === 'Amt') {
      this.amount.total_amount = this.amount.gross_amount - discount;
    }
    this.quotation_data.value.grand_total = this.quotation_data.value.total_amount + this.quotation_data.value.del_charges;
    //this.amount.grand_total_amount = Number(this.amount.total_amount) + Number(this.delivery_charges);
  }

  change_discount_type(event: any) {
    this.discount.type = event.target.value;
  }
}
