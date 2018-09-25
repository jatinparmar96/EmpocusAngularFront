import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormDataService } from '../../shared/services/form-data.service';
import * as alertFunctions from '../../shared/data/sweet-alert';

@Component({
  selector: 'app-bank-master',
  templateUrl: './bank-master.component.html',
  styleUrls: ['./bank-master.component.scss']
})
export class BankMasterComponent implements OnInit {

  constructor(
    // private fb:FormBuilder,
    // private formService:FormDataService,
    private Route: Router,
  ) {}

  ngOnInit() {
  }
  
  linkit(routeto){
    this.Route.navigateByUrl(routeto);
  }
}

