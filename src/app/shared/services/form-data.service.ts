import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: FormData = new FormData();
  private isValid:Boolean = false;
  private data:any=[];
  private stepCounter:number = 0;
  private currentStep:number = 0;
  
  private constructor() { }
  

  createNewForm(steps:number)
  {
    this.currentStep = 0;
    this.stepCounter = steps;
  }

  toNext(data:any,currentStep)
  {
      this.formData[currentStep] = data;
  }

  toPrevious(data:any,currentStep)
  {
      this.formData[currentStep] = data;  
  }
  
  getStepData(step:number)
  {
      let data = this.formData[step];
      return data;
  }

  getData()
  {
    let data:any=[this.currentStep,this.stepCounter,this.formData];
    return data;
  }
}
