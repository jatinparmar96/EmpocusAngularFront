import { MatStepperModule } from '@angular/material/stepper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
// import { BankMasterComponent } from './bank-master/bank-master.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BankMasterViewComponent } from './bank-master/bank-master-view/bank-master-view.component';
import { BankMasterCreateComponent } from './bank-master/bank-master-create/bank-master-create.component';
import { CreateChartsOfAccountComponent } from './charts-of-account/create-charts-of-account/create-charts-of-account.component';
import { ViewChartsOfAccountComponent } from './charts-of-account/view-charts-of-account/view-charts-of-account.component';
import { CreateUnitOfMeasurementComponent } from './unit-of-measurement/create-unit-of-measurement/create-unit-of-measurement.component';
import { ViewUnitOfMeasurementComponent } from './unit-of-measurement/view-unit-of-measurement/view-unit-of-measurement.component';
import { CreateRawProductComponent } from './raw-product/create-raw-product/create-raw-product.component';
import { ViewRawProductComponent } from './raw-product/view-raw-product/view-raw-product.component';
import { CreateFinishedProductComponent } from './finished-product/create-finished-product/create-finished-product.component';
import { ViewFinishedProductComponent } from './finished-product/view-finished-product/view-finished-product.component';
import { CreateChargesMasterComponent } from './charges-master/create-charges-master/create-charges-master.component';
import { ViewChargesMasterComponent } from './charges-master/view-charges-master/view-charges-master.component';
import { CreateBranchMasterComponent } from './branch-master/create-branch-master/create-branch-master.component';
import { ViewBranchMasterComponent } from './branch-master/view-branch-master/view-branch-master.component';
import { CreateGodownMasterComponent } from './godown-master/create-godown-master/create-godown-master.component';
import { ViewGodownMasterComponent } from './godown-master/view-godown-master/view-godown-master.component';
import { CreateBillOfMaterialComponent } from './bill-of-material/create-bill-of-material/create-bill-of-material.component';
import { ViewBillOfMaterialComponent } from './bill-of-material/view-bill-of-material/view-bill-of-material.component';
import { CreateCategoryMasterComponent } from './category-master/create-category-master/create-category-master.component';
import { ArchwizardModule } from 'angular-archwizard';
import { BomRawMaterialComponent } from './bom/bom-raw-material/bom-raw-material.component';
import { BomBasicComponent } from './bom/bom-basic/bom-basic.component';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { BomProcessRepeatTypeComponent } from './bom/bom-process/bom-process-repeat-section.type';
import { BOMScrapRepeatTypeComponent } from './bom/bom-scrap/bom-scarp-repeat-section.type';
import { BOMByProductRepeatTypeComponent } from './bom/bom-byproduct/bom-byproduct-repeat-section.type';


import { NgSelectModule } from '@ng-select/ng-select';
import { BomProcessComponent, TradeNameComponent } from './bom/bom-process/bom-process.component';
import { BomByproductComponent, SelectByProductComponent , SelectUOMByProductComponent } from './bom/bom-byproduct/bom-byproduct.component';
import { BomScrapComponent, SelectScrapProductComponent, SelectUOMScarpComponent } from './bom/bom-scrap/bom-scrap.component';
import { BomBasicDetailsComponent } from './bom/bom-basic-details/bom-basic-details.component';
import { SelectByProductCompo } from "app/sharedComponents/SelectByProductCompo";
import { BomBasicDetailsRepeatTypeComponent } from '../sharedComponents/bom-basic-details-repeat-section.type';
import { SelectUOMBOMBasicComponent } from 'app/sharedComponents/SelectUOMBOMBasicComponent';
import { BomTradeNameComponent } from 'app/sharedComponents/BomTradeNameComponent';
import { SelectProcessTypeComponent } from 'app/sharedComponents/SelectProcessTypeComponent';
import { TimefieldComponent } from 'app/sharedComponents/TimefieldComponent';
import { SelectScrapMaterialComponent } from 'app/sharedComponents/SelectScrapMaterialComponent';
import { SelectWastageComponent } from 'app/sharedComponents/SelectWastageComponent';


@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MatStepperModule,
    NgSelectModule,
    ReactiveFormsModule,
    //Angular Formly
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'repeat1', component: BomProcessRepeatTypeComponent },
        { name: 'repeat2', component: BOMScrapRepeatTypeComponent },
        { name: 'repeat3', component: BOMByProductRepeatTypeComponent },
        { name: 'select1', component: TradeNameComponent },
        { name: 'select2', component: SelectByProductComponent },
        { name: 'select4', component: SelectUOMByProductComponent },
        { name: 'select3', component: SelectScrapProductComponent },
        { name: 'select5', component: SelectUOMScarpComponent },
        { name: 'uom', component: SelectUOMBOMBasicComponent },
        { name: 'repeatit', component: BomBasicDetailsRepeatTypeComponent },
        { name: 'tradeName', component: BomTradeNameComponent },
        { name: 'processType', component: SelectProcessTypeComponent },
        { name: 'timeField', component: TimefieldComponent },
        { name: 'selectByProduct', component: SelectByProductCompo },
        { name: 'selectScarpMaterial', component: SelectScrapMaterialComponent },
        { name: 'selectWastage', component: SelectWastageComponent },
        
        
        
        
      ],
    }),
    //Angular Formly
    Ng2SmartTableModule,
    ArchwizardModule,
  ],
  declarations: [
    MainComponent,
    AddproductComponent,    
    // BankMasterComponent,
    ViewProductsComponent,
    BankMasterCreateComponent,
    BankMasterViewComponent,
    CreateChartsOfAccountComponent,
    ViewChartsOfAccountComponent,
    CreateUnitOfMeasurementComponent,
    ViewUnitOfMeasurementComponent,
    CreateRawProductComponent,
    ViewRawProductComponent,
    CreateFinishedProductComponent,
    ViewFinishedProductComponent,
    CreateChargesMasterComponent,
    ViewChargesMasterComponent,
    CreateBranchMasterComponent,
    ViewBranchMasterComponent,
    CreateGodownMasterComponent,
    ViewGodownMasterComponent,
    CreateBillOfMaterialComponent,
    ViewBillOfMaterialComponent,
    CreateCategoryMasterComponent,
    BomRawMaterialComponent,
    BomProcessComponent,
    BomBasicComponent,
    BomScrapComponent,
    BomByproductComponent,
    BomBasicDetailsRepeatTypeComponent,
    BomProcessRepeatTypeComponent,
    BOMScrapRepeatTypeComponent,
    BOMByProductRepeatTypeComponent,
    TradeNameComponent,
    SelectByProductComponent,
    SelectScrapProductComponent,
    SelectUOMByProductComponent,
    SelectUOMScarpComponent,
    SelectUOMBOMBasicComponent,
    BomTradeNameComponent,
    BomBasicDetailsComponent,
    SelectProcessTypeComponent,
    TimefieldComponent,
    SelectByProductCompo,
    SelectScrapMaterialComponent,
    SelectWastageComponent,
  ],
  exports:[]
})

export class DashboardModule { }
