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



const routes: Routes = [
  {
    path: 'lead/create',
    component: LeadCreateComponent
  },  
  {
    path: 'lead/show',
    component: LeadShowComponent
  },  
  {
    path: 'appointment/create',
    component: AppointmentCreateComponent
  },  
  {
    path: 'appointment/show',
    component: AppointmentShowComponent
  },  
  {
    path: 'task/create',
    component: TaskCreateComponent
  },  
  {
    path: 'contact/create',
    component: ContactCreateComponent
  },  
  {
    path: 'deal/create',
    component: DealCreateComponent
  },  
  {
    path: 'account/create',
    component: AccountCreateComponent
  },  
  {
    path: 'account/show',
    component: AccountShowComponent
  },  
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
