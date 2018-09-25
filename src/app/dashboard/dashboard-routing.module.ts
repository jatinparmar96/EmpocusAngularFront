import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ChartofaccountsComponent } from './chartofaccounts/chartofaccounts.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UnitofmeasurementComponent } from './unitofmeasurement/unitofmeasurement.component';
import { RawproductComponent } from './rawproduct/rawproduct.component';
import { ChargemasterComponent } from './chargemaster/chargemaster.component';
import { BranchMasterComponent } from './branch-master/branch-master.component';
import { BankMasterComponent } from './bank-master/bank-master.component';
import { GodownMasterComponent } from './godown-master/godown-master.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import {BillofmaterialComponent} from './billofmaterial/billofmaterial.component';


const routes:Routes= [
  {
    path:'',
    component:MainComponent,
    data:{
      'title':'Dashboard'
    }
  },
  {
    path:'chart-of-accounts',
    component:ChartofaccountsComponent,
    data:{
      'title':'Chart Of Accounts'
    }
  },
  {
    path:'add-products',
    component:AddproductComponent,
    data:{
      'title':'Add Products'
    }
  },
  {
    path:'add-uom',
    component:UnitofmeasurementComponent
  },
  {
    path:'raw-products',
    component:RawproductComponent
  },
  {
    path:'charges-master',
    component:ChargemasterComponent
  },
  {
    path:'branch-master',
    component:BranchMasterComponent
  },
  {
    path:'bank-master',
    component:BankMasterComponent
  },
  {
    path:'godown-master',
    component:GodownMasterComponent
  },
  {
    path:'view-raw-product-master',
    component:ViewProductsComponent
  },
  {
    path:'bill-of-material',
    component:BillofmaterialComponent
  },
  {
    path: 'bankmaster',
    component: BankMasterComponent,
    loadChildren: './bankmaster/bankmaster.module#BankmasterModule'
  },

  


  
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class DashboardRoutingModule { }
