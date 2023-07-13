import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSuperAdminComponent } from './layout/main-super-admin/main-super-admin.component';
import { MainAuthComponent } from './layout/main-auth/main-auth.component';
import { MainAdminComponent } from './layout/main-admin/main-admin.component';
import { MainUserComponent } from './layout/main-user/main-user.component';
import { FooterComponent } from './layout/shared/footer/footer.component';
import { NavBarComponent } from './layout/shared/nav-bar/nav-bar.component';
import { LoginComponent } from './fragments/auth/login/login.component';
import { LogoutComponent } from './fragments/auth/logout/logout.component';
import {FormsModule} from "@angular/forms";
import { DashboardSuperAdminComponent } from './fragments/dashboard-super-admin/dashboard-super-admin.component';
import { DashboardAdminComponent } from './fragments/dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './fragments/dashboard-user/dashboard-user.component';
import {AccountService} from "./services/auth/AccountService";
import {HttpClientModule} from "@angular/common/http";
import {StorageService} from "./services/storage/StorageService";
import { NavBarSuperAdminComponent } from './layout/main-super-admin/nav-bar-super-admin/nav-bar-super-admin.component';
import { NavBarAdminComponent } from './layout/main-admin/nav-bar-admin/nav-bar-admin.component';
import { NavBarUserComponent } from './layout/main-user/nav-bar-user/nav-bar-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSuperAdminComponent,
    MainAuthComponent,
    MainAdminComponent,
    MainUserComponent,
    FooterComponent,
    NavBarComponent,
    LoginComponent,
    LogoutComponent,
    DashboardSuperAdminComponent,
    DashboardAdminComponent,
    DashboardUserComponent,
    NavBarSuperAdminComponent,
    NavBarAdminComponent,
    NavBarUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AccountService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
