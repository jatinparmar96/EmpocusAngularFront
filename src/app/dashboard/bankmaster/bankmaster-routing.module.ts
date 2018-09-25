import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankMasterParentComponent } from './bank-master-parent/bank-master-parent.component'
import { BankMasterViewComponent } from './bank-master-view/bank-master-view.component';
import { BankMasterCreateComponent } from './bank-master-create/bank-master-create.component';

const routes: Routes = [
  {
    path: '',
    component: BankMasterParentComponent
  },
  {
    path: 'create',
    component: BankMasterCreateComponent
  },
  {
    path: 'view',
    component: BankMasterViewComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankmasterRoutingModule { }
