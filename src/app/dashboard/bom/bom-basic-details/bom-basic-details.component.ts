import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'app/shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from 'app/shared/services/form-data.service';
import { ShareService } from 'app/shared/services/share.service';
import { NotifyService } from 'app/shared/services/notify.service';


export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}


@Component({
  selector: 'app-bom-basic-details',
  templateUrl: './bom-basic-details.component.html',
  styleUrls: ['./bom-basic-details.component.scss']
})
export class BomBasicDetailsComponent implements OnInit {
  active = 'today';
  button_text ='Add BOM'
  debug = true;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = "new";
  // Replacable
  next:boolean = false;
  bom_data: FormGroup;
  bom: any;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  ) 
  // 1 Starts
  {
    // this.shareService.setVisibility(false);
    // this.bom_data = fb.group({
    //   "unit_name": ['', Validators.required],
    //   "id":['new',Validators.required],
    // });
    // this.resetErrorMessages();
  }

  ngOnInit() {
  }
  activedStep = 0;

  // model = {};
  model = {
    manufacture: [{}],
    byProduct: [{}],
    scrapMaterial: [{}],
    wastage: [{}],
    
  };
  
  // options: FormlyFormOptions = {}
  steps: StepType[] = [
    {
      label: 'Basic Details',
      fields: [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-4',
              type: 'input',
              key: 'bomItemName',
              templateOptions: {
                label: 'Item Name',
              },
            },
            {
              className: 'col-4',
              type: 'input',
              key: 'bomItemCode',
              templateOptions: {
                label: 'Item Code',
              },
            },
            {
              className: 'col-4',
              type: 'input',
              key: 'bomQty',
              templateOptions: {
                type: 'number',
                label: 'Quantity',
              },
            },
          ],
        },
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-4',
              type: 'input',
              key: 'bomName',
              templateOptions: {
                label: 'BOM Name',
              },
            },
            {
              className: 'col-4',
              type: 'input',
              key: 'bomnumber',
              templateOptions: {
                type: 'number',
                label: 'BOM Number',
                //required: true,
              },
            },
            {
              className: 'col-4',
              key: 'bomdate',
              type: 'input',
              templateOptions: {
                type: 'date',
                label: 'BOM Date',
                //required: true,
              },
            },
          ],
        },
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-4',
              type: 'input',
              key: 'bomRevisionNumber',
              templateOptions: {
                type: 'number',
                label: 'Revision Number',
              },
            },
            {
              className: 'col-4',
              key: 'bomRevDate',
              type: 'input',
              templateOptions: {
                type: 'date',
                label: 'Revision Date',
                //required: true,
              },
            },
            {
              key:'bomUOM',
              type: 'uom',
              className: 'col-lg-4',
            },
          ],
        },
      ],
    },
    {
      label: 'Manufacturing Process',
      
      fields: [
        {
          key: 'manufacture',
          type: 'repeatit',
          fieldArray: {
            fieldGroupClassName: 'row',
            templateOptions: {
              btnText: 'Add new Raw Product',
            },
            fieldGroup: [
              {
                key:'selectTradeName',
                type: 'tradeName',
                className: 'col-lg-3',
                templateOptions: {
                  label: 'Product Trade Name:',
                },
              },
              {
                key:'selectProcessType',
                type: 'processType',
                className: 'col-lg-3',
                templateOptions: {
                  label: 'Process Type:',
                },
              },
              {
                type: 'input',
                key: 'processQty',
                className: 'col-lg-2',
                templateOptions: {
                  type: 'number',
                  label: 'Qty:',
                },
              },
              {
                key:'timeField',
                type: 'timeField',
                className: 'col-lg-3',
                templateOptions: {
                  // label: 'Time:',
                },
              },
            ],
          },
        },
      ],
    },
    {
      label: 'By-Product',
      
      fields: [
        {
          key: 'byProduct',
          type: 'repeatit',
          fieldArray: {
            fieldGroupClassName: 'row',
            templateOptions: {
              btnText: 'Add new by Product',
            },
            fieldGroup: [
              {
                key:'selectByProduct',
                type: 'selectByProduct',
                className: 'col-lg-3',
                templateOptions: {
                  label: 'Select By-Product:',
                },
              },
              {
                key:'byProductUOM',
                type: 'uom',
                className: 'col-lg-3',
                templateOptions: {
                  label: 'UOM:',
                },
              },
              {
                type: 'input',
                key: 'byproductQty',
                className: 'col-lg-2',
                templateOptions: {
                  type: 'number',
                  label: 'Qty:',
                },
              },
            ],
          },
        },
      ],
    },
    {
      label: 'Scrap Material',
      
      fields: [
        {
          key: 'scrapMaterial',
          type: 'repeatit',
          fieldArray: {
            fieldGroupClassName: 'row',
            templateOptions: {
              btnText: 'Add new Scrap Material',
            },
            fieldGroup: [
              {
                key:'selectScarpMaterial',
                type: 'selectScarpMaterial',
                className: 'col-lg-3',
                templateOptions: {
                  label: 'Select Scrap Material:',
                },
              },
              {
                key:'scarpMaterialUOM',
                type: 'uom',
                className: 'col-lg-3',
                templateOptions: {
                  label: 'UOM:',
                },
              },
              {
                type: 'input',
                key: 'scarpQty',
                className: 'col-lg-2',
                templateOptions: {
                  type: 'number',
                  label: 'Qty:',
                },
              },
            ],
          },
        },
      ],
    },
    {
      label: 'Wastage',
      
      fields: [
        {
          key: 'wastage',
          type: 'repeatit',
          fieldArray: {
            fieldGroupClassName: 'row',
            templateOptions: {
              btnText: 'Add New Wastage',
            },
            fieldGroup: [
              {
                key:'selectWastage',
                type: 'selectWastage',
                className: 'col-lg-3',
                templateOptions: {
                  label: 'Select Wastage Material:',
                },
              },
              {
                key:'wastageUOM',
                type: 'uom',
                className: 'col-lg-3',
                templateOptions: {
                  label: 'UOM:',
                },
              },
              {
                type: 'input',
                key: 'wastageQty',
                className: 'col-lg-2',
                templateOptions: {
                  type: 'number',
                  label: 'Qty:',
                },
              },
            ],
          },
        },
      ],
    },
  ];

  form = new FormArray(this.steps.map(() => new FormGroup({})));
  options = this.steps.map(() => <FormlyFormOptions> {});

  prevStep(step) {
    this.activedStep = step - 1;
  }

  nextStep(step) {
    this.activedStep = step + 1;
  }

  // submit() {
  //   alert(JSON.stringify(this.model));
  // }

  // 3 Starts
  getData(id:any){
		this.apiService.get("admin/bom/"+id)
		.then(data => { 
			let l_data: any = data;
			this.bom_data.patchValue(l_data.data);					
		})
	}
  addOrUpdate(){
		this.formTouched = true;
		// if(this.bom.invalid){
		// 	return false;
		// }
		this.resetErrorMessages();
		this.isProcessing = true;
			//post request
			this.apiService.post("admin/bom",this.model).then( data => {
        let result: any = data;
				//success
        this.isProcessing = false;
        if(result.status)
							{
								this.notifyService.show({
									title: 'Success',
									message: result.message
                },'success');
                if(this.next)
                {
               
                  this.resetForm(this.bom);
                  
                }
                else
                {
                  console.log('else');
                }

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
		// this.errors = {			
		// 	"id": [""],
		// 	"unit_name": [""]	
		// }
  }
  resetForm(bom)
  {
    
  }
}

