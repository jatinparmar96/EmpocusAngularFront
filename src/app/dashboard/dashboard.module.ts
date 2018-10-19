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
import { BomProcessComponent } from './bom/bom-process/bom-process.component';
import { BomBasicComponent } from './bom/bom-basic/bom-basic.component';
import { BomScrapComponent } from './bom/bom-scrap/bom-scrap.component';
import { BomByproductComponent } from './bom/bom-byproduct/bom-byproduct.component';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { BomProcessRepeatTypeComponent } from './bom/bom-process/bom-process-repeat-section.type';
import { BOMScrapRepeatTypeComponent } from './bom/bom-scrap/bom-scarp-repeat-section.type';
import { BOMByProductRepeatTypeComponent } from './bom/bom-byproduct/bom-byproduct-repeat-section.type';
import { ViewCategoryMasterComponent } from './category-master/view-category-master/view-category-master.component';
import { SharedModule } from 'app/shared/shared.module';







@NgModule({
  imports: [
    NgbModule,
    SharedModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

    //Angular Formly
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'repeat', component: BomProcessRepeatTypeComponent },
        { name: 'repeat', component: BOMScrapRepeatTypeComponent },
        { name: 'repeat', component: BOMByProductRepeatTypeComponent },
        
        
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
    BomProcessRepeatTypeComponent,
    BOMScrapRepeatTypeComponent,
    BOMByProductRepeatTypeComponent,
    ViewCategoryMasterComponent,

    
  ],
  exports:[]
})

export class DashboardModule { }
