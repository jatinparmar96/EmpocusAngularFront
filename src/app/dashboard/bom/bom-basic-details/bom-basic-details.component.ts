import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormArray, FormGroup } from '@angular/forms';


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

  ngOnInit() {
  }
  activedStep = 0;

  // model = {};
  model = {
    manufacture: [{}],
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
                key:'selectTradeName',
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
                  label: 'Process Qty:',
                },
              },
              // {
              //   type: 'input',
              //   key: 'availableQty',
              //   className: 'col-lg-2',
              //   templateOptions: {
              //     type: 'number',
              //     label: 'Available Qty:',
              //     readOnly: true,
              //     placeholder: '200',
              //   },
              //   expressionProperties: {
              //     'templateOptions.disabled': '!model.text',
              //   },
              // },
              // {
              //   type: 'input',
              //   key: 'uom',
              //   className: 'col-lg-1',
              //   templateOptions: {
              //     label: 'UOM:',
              //     placeholder: 'ltr',
              //   },
              //   expressionProperties: {
              //     'templateOptions.disabled': '!model.text',
              //   },
              // },
            ],
          },
        },
      ],
    },
    {
      label: 'Day of the trip',
      fields: [
        {
          key: 'day',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Day of the trip',
            //required: true,
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

  submit() {
    alert(JSON.stringify(this.model));
  }
}


