import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadCreateComponent } from './lead/lead-create/lead-create.component';
import { LeadShowComponent } from './lead/lead-show/lead-show.component';
import { AppointmentCreateComponent } from './appointment/appointment-create/appointment-create.component';
import { TaskCreateComponent } from './task/task-create/task-create.component';
import { ContactCreateComponent } from './contact/contact-create/contact-create.component';
import { DealCreateComponent } from './deal/deal-create/deal-create.component';
import { AccountCreateComponent } from './account/account-create/account-create.component';
import { AccountShowComponent } from './account/account-show/account-show.component';
import { AppointmentShowComponent } from './appointment/appointment-show/appointment-show.component';
import { QuotationCreateComponent } from './quotation/quotation-create/quotation-create.component';
import { BillingCreateComponent } from './billing/billing-create/billing-create.component';
import { BillingShowComponent } from './billing/billing-show/billing-show.component';
import { QuotationShowComponent } from './quotation/quotation-show/quotation-show.component';
import { TaskShowComponent } from './task/task-show/task-show.component';
import { ContactShowComponent } from './contact/contact-show/contact-show.component';
import { DealShowComponent } from './deal/deal-show/deal-show.component';
import { LeadViewComponent } from './lead/lead-view/lead-view.component';
import { AppointmentViewComponent } from './appointment/appointment-view/appointment-view.component';
import { TaskViewComponent } from './task/task-view/task-view.component';
import { ContactViewComponent } from './contact/contact-view/contact-view.component';
import { DealViewComponent } from './deal/deal-view/deal-view.component';
import { AccountViewComponent } from './account/account-view/account-view.component';
import { QuotationViewComponent } from './quotation/quotation-view/quotation-view.component';
import { BillingViewComponent } from './billing/billing-view/billing-view.component';

const routes: Routes = [
  {
    path: 'lead/new',
    component: LeadCreateComponent
  },  
  {
    path: 'lead',
    component: LeadViewComponent
  },  
  
  {
    path: 'lead/show',
    component: LeadShowComponent
  },  
  {
    path: 'appointment',
    component: AppointmentViewComponent
  },  
  {
    path: 'appointment/new',
    component: AppointmentCreateComponent
  },  
  {
    path: 'appointment/show',
    component: AppointmentShowComponent
  },  
  
  {
    path: 'task',
    component: TaskViewComponent
  },  
  {
    path: 'task/new',
    component: TaskCreateComponent
  },  
  {
    path: 'task/show',
    component: TaskShowComponent
  },  
  
  {
    path: 'contact',
    component: ContactViewComponent
  },  
  {
    path: 'contact/new',
    component: ContactCreateComponent
  },  
  {
    path: 'contact/show',
    component: ContactShowComponent
  },  
  {
    path: 'deal',
    component: DealViewComponent
  },  
  {
    path: 'deal/new',
    component: DealCreateComponent
  },  
  {
    path: 'deal/show',
    component: DealShowComponent
  },  
  
  {
    path: 'account',
    component: AccountViewComponent
  },  
  {
    path: 'account/new',
    component: AccountCreateComponent
  },  
  {
    path: 'account/show',
    component: AccountShowComponent
  },  

  {
    path: 'quotation',
    component: QuotationViewComponent
  },  
  {
    path: 'quotation/new',
    component: QuotationCreateComponent
  },  
  {
    path: 'quotation/show',
    component: QuotationShowComponent
  }, 
  {
    path: 'billing',
    component: BillingViewComponent
  },  
  {
    path: 'billing/new',
    component: BillingCreateComponent
  },  
  {
    path: 'billing/show',
    component: BillingShowComponent
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
