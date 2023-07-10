import { Component } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  email: string = ''
  password : string = ''

  constructor(
    private cookiesService : CookieService,
    private authService : AuthService
  ) {
  }

  handleLogin() {
    console.log(this.email, this.password);
    
    this.authService.handleLogin(this.email, this.password)
  }

}
