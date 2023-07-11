import {Injectable, OnInit} from '@angular/core';
import {EmployeeService} from "../employee/employee.service";
import {map, tap} from "rxjs";
import {CHECK_IF_LOGGED_IN, IEmployee, ILoggedInData} from "../employee/employee";
import {CookieService} from "ngx-cookie-service";
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  password : string = "test123";

  isLoggedIn : boolean = false;

  employees$  = this.employeeService.employees$;

  employeeAuthority : ILoggedInData = {
    isLoggedIn : false,
    employeeId : "",
    authority: []
  };

  

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

    this.employees$.pipe(
       
    )
    .subscribe(items => items.map(
      item => {
       if(item.email === email && password === this.password) {
         this.employeeAuthority.isLoggedIn = true;
         this.employeeAuthority.employeeId = item.id;
         this.employeeAuthority.authority = item.authority;

         console.log("111",this.employeeAuthority);

         this.cookiesService.set(CHECK_IF_LOGGED_IN, JSON.stringify(
          this.employeeAuthority
        ), expirationData);
    
        this.router.navigate(['employees'])
       }
      } 
   ));
  }

  isAuthenticated(): boolean {

    let employeData : string= this.cookiesService.get(CHECK_IF_LOGGED_IN);
 
    if(employeData) {
      const data : ILoggedInData = JSON.parse(employeData);
      if(data.isLoggedIn) {
        return true
      }
    }
    return  this.employeeAuthority.isLoggedIn;
  }

  ngOnInit(): void {

  }
}
