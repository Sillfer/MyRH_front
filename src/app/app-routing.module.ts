import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './views/auth/login/login.component';
import {HomeComponent} from "./views/home/home.component";
import {RegisterComponent} from "./views/auth/register/register.component";
import {JobOffersComponent} from "./views/job-offers/job-offers.component";
import {CompanyComponent} from "./layout/company/company.component";
import {AddJobComponent} from "./views/company/add-job/add-job.component";
import {DashboardComponent} from "./views/company/dashboard/dashboard.component";
import {AuthComponent} from "./layout/auth/auth.component";
import {AdminLoginComponent} from "./views/auth/login/admin-login/admin-login.component";
import {AgentComponent} from "./layout/agent/agent.component";
import {BoardAdminComponent} from "./views/board-admin/board-admin.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'auth', component: AuthComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'agent', component: AdminLoginComponent}
    ]
  },
  {
    path: 'agent', component: AgentComponent, children: [
      {path: 'dashboard', component: BoardAdminComponent},
      {path: 'add-job', component: AddJobComponent}
    ]
  },
  {
    path: 'company', component: CompanyComponent,
    children: [
      {path: 'add-job', component: AddJobComponent},
      {path: 'dashboard', component: DashboardComponent},
    ]
  },
  {path: 'job-offers', component: JobOffersComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
