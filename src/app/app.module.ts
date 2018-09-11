
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { ApiService } from './shared/services/api.service';
import { ShareService } from './shared/services/share.service';
import {FormDataService} from './shared/services/form-data.service';

import * as $ from 'jquery';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { SetupCompanyComponent } from './pages/setup-company/setup-company.component';
import {CompanyInfoComponent} from './pages/setup-company/company-info/company-info.component';
import { HeadOfficeInfoComponent } from './pages/setup-company/head-office-info/head-office-info.component';
import { BankDetailsComponent } from './pages/setup-company/bank-details/bank-details.component';
import { CompanyOtherDetailsComponent } from './pages/setup-company/company-other-details/company-other-details.component';
import { MainComponent } from './dashboard/main/main.component';
import { DashboardModule } from './dashboard/dashboard.module';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
        RegisterComponent,
        LoginComponent,
        SetupCompanyComponent,
        CompanyInfoComponent,
        HeadOfficeInfoComponent,
        BankDetailsComponent,
        CompanyOtherDetailsComponent,
        ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
         HttpClientModule,
        NgbModule.forRoot(),
       JwtModule.forRoot({
       config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4000'],
        blacklistedRoutes: ['localhost:4000/api/auth']
      }
    })
    ],
    providers: [
        ShareService,
        AuthService,
        AuthGuard,
        ApiService
      

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }