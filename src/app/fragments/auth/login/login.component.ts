import { Component } from '@angular/core';
import {AccountService} from "../../../services/auth/AccountService";
import {Router} from "@angular/router";
import {Login} from "../../../models/Models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private accountService: AccountService, private router: Router) { }
  login: Login = new Login();
  ngOnInit(): void {
    if(this.accountService.isAuthEd()){
      this.router.navigate([this.accountService.dashboardUrl]).then(r => console.log(r))
    }
  }
  async loginForm(){
    let auth = await this.accountService.login(this.login);
    if(auth.success){
      this.router.navigate([this.accountService.dashboardUrl]).then(r => console.log(r))
      //alert(auth.msg);
    }else {
      //alert(auth.msg);
    }
  }
}
