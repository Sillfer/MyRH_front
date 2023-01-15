import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { BoardAdminComponent } from './views/board-admin/board-admin.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { PrimaryNavbarComponent } from './components/navbar/primary-navbar/primary-navbar.component';
import { SuccessAlertComponent } from './components/alerts/success-alert/success-alert.component';
import { WarningAlertComponent } from './components/alerts/warning-alert/warning-alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { JobOffersComponent } from './views/job-offers/job-offers.component';
import {JobOffersCardComponent} from "./components/cards/job-offers-card/job-offers.component";
import { JobDetailButtonComponent } from './components/buttons/job-detail-button/job-detail-button.component';
import { CompanyComponent } from './layout/company/company.component';
import { AuthComponent } from './layout/auth/auth.component';
import {AddJobComponent} from "./views/company/add-job/add-job.component";
import { DashboardComponent } from './views/company/dashboard/dashboard.component';
import { AddjobFormComponent } from './components/forms/addjob-form/addjob-form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminLoginComponent } from './views/auth/login/admin-login/admin-login.component';
import { AgentLoginFormComponent } from './components/forms/agent-login-form/agent-login-form.component';
import { AgentComponent } from './layout/agent/agent.component';
import { CardTableComponent } from './components/cards/card-table/card-table.component';
import { CardSocialTrafficComponent } from './components/cards/card-social-traffic/card-social-traffic.component';
import { CardPageVisitsComponent } from './components/cards/card-page-visits/card-page-visits.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    RegisterFormComponent,
    LoginFormComponent,
    PrimaryNavbarComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    JobOffersComponent,
    JobOffersCardComponent,
    JobDetailButtonComponent,
    CompanyComponent,
    AuthComponent,
    AddJobComponent,
    DashboardComponent,
    AddjobFormComponent,
    SidebarComponent,
    FooterComponent,
    AdminLoginComponent,
    AgentLoginFormComponent,
    AgentComponent,
    CardTableComponent,
    CardSocialTrafficComponent,
    CardPageVisitsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    SweetAlert2Module.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
