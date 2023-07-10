import {Injectable, OnInit} from '@angular/core';
import {EmployeeService} from "../employee/employee.service";
import {map, tap} from "rxjs";
import {CHECK_IF_LOGGED_IN, IEmployee} from "../employee/employee";
import {CookieService} from "ngx-cookie-service";
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  password : string = "test123";

  isLoggedIn : boolean = false;

  employees$  = this.employeeService.employees$;
  employeeAuthority: string[] = [];
  

  constructor(
    private employeeService: EmployeeService,
    private cookiesService : CookieService,
    private router : Router
    ) {}

  //create getter and setter with isAuth
  setIsLoggedIn (value : boolean){
    this.isLoggedIn = value;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

   handleLogin(email : string, password: string) {
    // this.employees$.pipe(
    //   tap(items => items.find(item =>
    //     item.email === email, false))
    // )

    const expirationData = new Date();
    expirationData.setMinutes(expirationData.getMinutes() + 1)

    this.employees$.subscribe(items =>{
      this.setIsLoggedIn(items.some(item => item.email === email));
      
      if(this.getIsLoggedIn() && password === this.password) {
        this.cookiesService.set(CHECK_IF_LOGGED_IN, JSON.stringify(true), expirationData)
        this.router.navigate(['employees'])     
      }
    });
  }

  isAuthenticated(): boolean {
    const isTokenValid =  this.cookiesService.get(CHECK_IF_LOGGED_IN);

    if(isTokenValid) return true;
  
    return  this.getIsLoggedIn();
    }

  ngOnInit(): void {

  }
}
