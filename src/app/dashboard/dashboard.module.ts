import { NgModule } from '@angular/core';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartofaccountsComponent } from './chartofaccounts/chartofaccounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UnitofmeasurementComponent } from './unitofmeasurement/unitofmeasurement.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  declarations: [
    MainComponent,
    ChartofaccountsComponent,
    AddproductComponent,
    UnitofmeasurementComponent

  ],
  exports:[]
})

export class DashboardModule { }
