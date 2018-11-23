import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { LeadCreateComponent } from './lead/lead-create/lead-create.component';
import { LeadViewComponent } from './lead/lead-view/lead-view.component';
import { LeadShowComponent } from './lead/lead-show/lead-show.component';
import { AppointmentCreateComponent } from './appointment/appointment-create/appointment-create.component';
import { TaskCreateComponent } from './task/task-create/task-create.component';
import { ContactCreateComponent } from './contact/contact-create/contact-create.component';
import { DealCreateComponent } from './deal/deal-create/deal-create.component';
import { AccountCreateComponent } from './account/account-create/account-create.component';



@NgModule({
  imports: [
    CommonModule,
    CrmRoutingModule
  ],
  declarations: [LeadCreateComponent, LeadViewComponent, LeadShowComponent, AppointmentCreateComponent, TaskCreateComponent, ContactCreateComponent, DealCreateComponent, AccountCreateComponent]
})
export class CrmModule { }
