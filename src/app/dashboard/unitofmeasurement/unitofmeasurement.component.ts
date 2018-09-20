import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormDataService } from '../../shared/services/form-data.service';

@Component({
  selector: 'app-unitofmeasurement',
  templateUrl: './unitofmeasurement.component.html',
  styleUrls: ['./unitofmeasurement.component.scss']
})
export class UnitofmeasurementComponent implements OnInit {
  active= 'today';
  debug= true;
  unit_data: FormGroup;
  constructor(
    private fb:FormBuilder,
    private formService:FormDataService
  ) { 
    this.unit_data= fb.group({
      "unit_name":['Kg',Validators.required],
    });
  }

  ngOnInit() {
  }
  onSubmit(unit_data)
  {
    this.formService.storeData('admin/addUOM',unit_data.value).then(data=>{
      if(this.debug){
        console.log(data);
      }
    }).catch(error=>{
      if(this.debug){
        console.log(error)
      }
    })
  }

}
