import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ChartofaccountsComponent } from './chartofaccounts/chartofaccounts.component';

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
  }

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
