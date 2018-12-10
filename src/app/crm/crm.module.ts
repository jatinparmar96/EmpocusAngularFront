import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { CrmRoutingModule } from './crm-routing.module';
import { LeadCreateComponent } from './lead/lead-create/lead-create.component';
import { LeadViewComponent } from './lead/lead-view/lead-view.component';
import { LeadShowComponent } from './lead/lead-show/lead-show.component';
import { AppointmentCreateComponent } from './appointment/appointment-create/appointment-create.component';
import { TaskCreateComponent } from './task/task-create/task-create.component';
import { ContactCreateComponent } from './contact/contact-create/contact-create.component';
import { DealCreateComponent } from './deal/deal-create/deal-create.component';
import { AccountCreateComponent } from './account/account-create/account-create.component';
import { AccountShowComponent } from './account/account-show/account-show.component';
import { AppointmentShowComponent } from './appointment/appointment-show/appointment-show.component';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuotationCreateComponent } from './quotation/quotation-create/quotation-create.component';

import { BillingCreateComponent } from './billing/billing-create/billing-create.component';

@NgModule({
  imports: [
    CommonModule,
    CrmRoutingModule,
    NgSelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LeadCreateComponent, 
    LeadViewComponent, 
    LeadShowComponent,
    AppointmentCreateComponent,
    TaskCreateComponent,
    ContactCreateComponent,
    DealCreateComponent, 
    AccountCreateComponent, 
    AccountShowComponent, 
    AppointmentShowComponent, QuotationCreateComponent, BillingCreateComponent,
  ]
})
export class CrmModule { }
