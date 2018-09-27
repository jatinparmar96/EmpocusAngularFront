import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartofaccountsComponent } from './chartofaccounts/chartofaccounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RawproductComponent } from './rawproduct/rawproduct.component';
import { ChargemasterComponent } from './chargemaster/chargemaster.component';
import { GodownMasterComponent } from './godown-master/godown-master.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BillofmaterialComponent } from './billofmaterial/billofmaterial.component';
import{BankMasterCreateComponent} from './bank-master/bank-master-create/bank-master-create.component'
import {BankMasterViewComponent} from './bank-master/bank-master-view/bank-master-view.component';
import { BranchMasterCreateComponent } from './branch-master/branch-master-create/branch-master-create.component';
import { BranchMasterViewComponent } from './branch-master/branch-master-view/branch-master-view.component'
import {NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UnitofmeasurementCreateComponent } from './unitofmeasurement/unitofmeasurement-create/unitofmeasurement-create.component';
import { UnitofmeasurementViewComponent } from './unitofmeasurement/unitofmeasurement-view/unitofmeasurement-view.component';
import { ChartOfAccountsCreateComponent } from './chartofaccounts/chart-of-accounts-create/chart-of-accounts-create.component';
import { ChartOfAccountsViewComponent } from './chartofaccounts/chart-of-accounts-view/chart-of-accounts-view.component';


@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    NgxDatatableModule
  ],
  declarations: [
    MainComponent,
    ChartofaccountsComponent,
    AddproductComponent,
    RawproductComponent,
    ChargemasterComponent,
    GodownMasterComponent,
    ViewProductsComponent,
    BillofmaterialComponent,
    BankMasterCreateComponent,
    BankMasterViewComponent,
    BranchMasterCreateComponent,
    BranchMasterViewComponent,
    UnitofmeasurementCreateComponent,
    UnitofmeasurementViewComponent,
    ChartOfAccountsCreateComponent,
    ChartOfAccountsViewComponent
  ],
  exports:[]
})

export class DashboardModule { }
