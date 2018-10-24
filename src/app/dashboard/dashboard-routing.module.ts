import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewProductsComponent } from './view-products/view-products.component';
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
import { BomRawMaterialComponent } from './bom/bom-raw-material/bom-raw-material.component';
import { BomBasicComponent } from './bom/bom-basic/bom-basic.component';
import { BomProcessComponent } from './bom/bom-process/bom-process.component';
import { BomScrapComponent } from './bom/bom-scrap/bom-scrap.component';
import { BomByproductComponent } from './bom/bom-byproduct/bom-byproduct.component';
import { componentFactoryName } from '@angular/compiler';
import { BomBasicDetailsComponent } from './bom/bom-basic-details/bom-basic-details.component';
import { ViewCategoryMasterComponent } from './category-master/view-category-master/view-category-master.component';
import { ShowBranchComponent } from './branch-master/show-branch/show-branch.component';
import { CreateProcessTypeComponent } from './process_type/create-process-type/create-process-type.component';

const routes:Routes= [
  {
    path: '',    
    children: [
      {
        path: 'charges-master',
        component: ViewChargesMasterComponent
      },
      {
        path:'charges-master/:id',
        component:CreateChargesMasterComponent
      },
      {
        path:'add-products',
        component:AddproductComponent,
      },
      {
        path:'branch-master/:id',
        component:CreateBranchMasterComponent
      },
      {
        path:'branch-master/detail/:id',
        component:ShowBranchComponent
      },
      {
        path:'branch-master',
        component:ViewBranchMasterComponent
      },
      {
        path:'godown-master/:id',
        component:CreateGodownMasterComponent
      },
      {
        path:'godown-master',
        component:ViewGodownMasterComponent
      },
      {
        path:'view-raw-product-master',
        component:ViewProductsComponent
      },
      {
        path:'bill-of-material/:id',
        component:CreateBillOfMaterialComponent
      },
      {
        path:'bill-of-material',
        component:ViewBillOfMaterialComponent
      },
      {
        path:'bank-master',
        component:BankMasterViewComponent
      },
      {
        path:'bank-master/:id',
        component:BankMasterCreateComponent
      },
      {
        path:'finished-product/create',
        component:CreateFinishedProductComponent
      },
      {
        path:'finished-product',
        component:ViewFinishedProductComponent
      },
      {
        path:'charts-of-accounts/:id',
        component:CreateChartsOfAccountComponent
      },
      {
        path:'charts-of-accounts',
        component:ViewChartsOfAccountComponent
      },
      {
        path:'unit-of-measurement/:id',
        component:CreateUnitOfMeasurementComponent
      },
      {
        path:'unit-of-measurement',
        component:ViewUnitOfMeasurementComponent
      },
      {
        path:'raw-product/:id',
        component:CreateRawProductComponent
      },
      {
        path:'raw-product',
        component:ViewRawProductComponent
      },  
      {
        path:'category/:id',
        component:CreateCategoryMasterComponent
      },  
      {
        path:'category',
        component:ViewCategoryMasterComponent
      },
      {
        path:'bom/new',
        component:BomBasicComponent
      },
      {
        path:'bom/raw-material',
        component:BomRawMaterialComponent
      },
      {
        path:'bom/process',
        component:BomProcessComponent
      },
      {
        path:'bom/scrap',
        component:BomScrapComponent
      },
      {
        path:'bom/byproduct',
        component:BomByproductComponent
      },
      {
        path:'bom/steps',
        component:BomBasicDetailsComponent
      },
      {
        path:'process-type/:id',
        component:CreateProcessTypeComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DashboardRoutingModule { }
