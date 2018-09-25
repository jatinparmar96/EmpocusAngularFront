import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankmasterRoutingModule } from './bankmaster-routing.module';
import { BankMasterViewComponent } from './bank-master-view/bank-master-view.component';
import { BankMasterCreateComponent } from './bank-master-create/bank-master-create.component';
import { BankMasterParentComponent } from './bank-master-parent/bank-master-parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BankmasterRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  declarations: [
    BankMasterViewComponent, 
    BankMasterCreateComponent, 
    BankMasterParentComponent
  ]
})
export class BankmasterModule { }
