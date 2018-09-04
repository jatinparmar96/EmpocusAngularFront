import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-setup-company',
  templateUrl: './setup-company.component.html',
  styleUrls: ['./setup-company.component.scss',
  			'../../../app-assets/vendors/css/wizard.css'
  			]
})
export class SetupCompanyComponent implements OnInit {

    company_data: FormGroup;
  constructor(private fb:FormBuilder) {
  		$.getScript('/assets/js/jquery.steps.min.js');
  	  $.getScript('/assets/js/wizard-steps.js');

          this.company_data = fb.group({
            "company_name": ["",Validators.required],
            "company_display_name": ["",Validators.required],
            "company_fax_number":["",Validators.required],
            "company_website":["",Validators.required],
            "company_address_road_name":["",Validators.required],
            "company_address_landmark":["",Validators.required],
            "company_address_pincode":["",Validators.required],
            "":["",Validators.required],
            "":["",Validators.required],
            "":["",Validators.required],
            "":["",Validators.required],
            "":["",Validators.required],
            "":["",Validators.required],
            "":["",Validators.required],
            "":["",Validators.required],
            "":["",Validators.required],
            "":["",Validators.required],
            "":["",Validators.required],
            "":["",Validators.required],
          });

   }


  ngOnInit() {
		  	

  }

  onSubmit(company_data)
  {
      console.log(company_data);
  }
}
