import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartofaccountsComponent } from './chartofaccounts/chartofaccounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UnitofmeasurementComponent } from './unitofmeasurement/unitofmeasurement.component';
import { RawproductComponent } from './rawproduct/rawproduct.component';
import { ChargemasterComponent } from './chargemaster/chargemaster.component';
import { BranchMasterComponent } from './branch-master/branch-master.component';
import { BankMasterComponent } from './bank-master/bank-master.component';
import { GodownMasterComponent } from './godown-master/godown-master.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BillofmaterialComponent } from './billofmaterial/billofmaterial.component';


@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [
    MainComponent,
    ChartofaccountsComponent,
    AddproductComponent,
    UnitofmeasurementComponent,
    RawproductComponent,
    ChargemasterComponent,
    BranchMasterComponent,
    BankMasterComponent,
    GodownMasterComponent,
    ViewProductsComponent,
    BillofmaterialComponent
  ],
  exports:[]
})

export class DashboardModule { }
