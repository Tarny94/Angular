import {Injectable, OnInit} from '@angular/core';
import {EmployeeService} from "../employee/employee.service";
import {map, tap} from "rxjs";
import {CHECK_IF_LOGGED_IN, IEmployee} from "../employee/employee";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{


  password : string = "test123";

  isLoggedIn : boolean = false;

  employees$ = this.employeeService.employees$;
  employeesList : IEmployee[] = [];
  employeeAuthority: string[] = [];

  constructor(private employeeService: EmployeeService,private cookiesService : CookieService,) {}

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
    this.employees$.subscribe(items =>
      this.employeesList = items)

    this.setIsLoggedIn(this.employeesList.some(item => item.email === email))
    if(this.getIsLoggedIn())  this.cookiesService.set(CHECK_IF_LOGGED_IN, String(true));
  }

  ngOnInit(): void {

  }
}
