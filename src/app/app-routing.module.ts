import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainAuthComponent} from "./layout/main-auth/main-auth.component";
import {LoginComponent} from "./fragments/auth/login/login.component";
import {LogoutComponent} from "./fragments/auth/logout/logout.component";
import {MainSuperAdminComponent} from "./layout/main-super-admin/main-super-admin.component";
import {DashboardSuperAdminComponent} from "./fragments/dashboard-super-admin/dashboard-super-admin.component";
import {MainAdminComponent} from "./layout/main-admin/main-admin.component";
import {DashboardAdminComponent} from "./fragments/dashboard-admin/dashboard-admin.component";
import {MainUserComponent} from "./layout/main-user/main-user.component";
import {DashboardUserComponent} from "./fragments/dashboard-user/dashboard-user.component";

const routes: Routes = [
  {
    path:'auth',
    component:MainAuthComponent,
    children:[
      {
        path: 'login',
        component:LoginComponent
      },
      {
        path: 'logout',
        component:LogoutComponent
      },
    ]
  },
  {
    path: 'super-admin',
    component: MainSuperAdminComponent,
    children: [
      {
        path: '',
        component: DashboardSuperAdminComponent
      }
    ]
  },
  {
    path: 'admin',
    component: MainAdminComponent,
    children: [
      {
        path: '',
        component: DashboardAdminComponent
      }
    ]
  },
  {
    path: 'user',
    component: MainUserComponent,
    children: [
      {
        path: '',
        component: DashboardUserComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo:'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
