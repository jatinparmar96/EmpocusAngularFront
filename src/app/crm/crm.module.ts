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
import { QuotationTableRowsComponent } from './quotation/quotation-table-rows/quotation-table-rows.component';
import { BillingShowComponent } from './billing/billing-show/billing-show.component';
import { QuotationShowComponent } from './quotation/quotation-show/quotation-show.component';
import { TaskShowComponent } from './task/task-show/task-show.component';
import { ContactShowComponent } from './contact/contact-show/contact-show.component';
import { DealShowComponent } from './deal/deal-show/deal-show.component';
import { AppointmentViewComponent } from './appointment/appointment-view/appointment-view.component';
import { TaskViewComponent } from './task/task-view/task-view.component';
import { ContactViewComponent } from './contact/contact-view/contact-view.component';
import { DealViewComponent } from './deal/deal-view/deal-view.component';
import { AccountViewComponent } from './account/account-view/account-view.component';
import { QuotationViewComponent } from './quotation/quotation-view/quotation-view.component';
import { BillingViewComponent } from './billing/billing-view/billing-view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AccountSelectComponent } from './shared-components/account-select/account-select.component';


@NgModule({
  imports: [
    CommonModule,
    CrmRoutingModule,
    NgSelectModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
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
    AppointmentShowComponent, QuotationCreateComponent, BillingCreateComponent, QuotationTableRowsComponent, BillingShowComponent, QuotationShowComponent, TaskShowComponent, ContactShowComponent, DealShowComponent, AppointmentViewComponent, TaskViewComponent, ContactViewComponent, DealViewComponent, AccountViewComponent, QuotationViewComponent, BillingViewComponent, AccountSelectComponent,
  ]
})
export class CrmModule { }
