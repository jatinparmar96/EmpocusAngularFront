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

const routes: Routes = [
  {
    path: 'lead/new',
    component: LeadCreateComponent
  },  
  {
    path: 'lead/show',
    component: LeadShowComponent
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
    path: 'task/new',
    component: TaskCreateComponent
  },  
  {
    path: 'contact/new',
    component: ContactCreateComponent
  },  
  {
    path: 'deal/new',
    component: DealCreateComponent
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
    path: 'quotation/new',
    component: QuotationCreateComponent
  },  
  {
    path: 'billing/new',
    component: BillingCreateComponent
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
