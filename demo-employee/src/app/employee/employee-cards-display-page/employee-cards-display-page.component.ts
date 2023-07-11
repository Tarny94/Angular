import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable, Subject, tap } from 'rxjs';
import { CHECK_IF_LOGGED_IN, IEmployee, ILoggedInData } from '../employee';
import { EmployeeService } from '../employee.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-employee-cards-display-page',
  templateUrl: './employee-cards-display-page.component.html',
  styleUrls: ['./employee-cards-display-page.component.scss']
})
export class EmployeeCardsDisplayPageComponent implements OnInit{

  isTable : boolean = false;

  filterByName= new BehaviorSubject<string>("");
  filterByNameAction$ = this.filterByName.asObservable();
  employeeAuthority! : ILoggedInData;

  employees$! : Observable<IEmployee[]>;

  constructor(
    private employeeService : EmployeeService,
    private router : Router,
    private cookiesService : CookieService
  ) {
  }

  loadData(){
    this.employees$  = combineLatest(
      [this.employeeService.employees$, this.filterByNameAction$]
    ).pipe(
      tap(item => console.log("#item" ,item)),
      map(([items, filteredName]) =>
        items.filter(item  => filteredName !== ""? item.firstName.toLowerCase().includes(filteredName.toLowerCase())  : true),
      )
    ) ;
  }
  onUpdate() {
    this.loadData()
  }

  handleLogout() {
    this.cookiesService.set(CHECK_IF_LOGGED_IN, JSON.stringify(undefined))
    this.router.navigate(["login"])
  }

  handleIsTable() {
    this.isTable = !this.isTable
  }
  onSelected(value : string) {
    this.filterByName.next(value);
  }

  handleAddEmployee(){
    this.router.navigate(["/employees/create"])
  }

  ngOnInit(): void {
    this.loadData()

    const data : string= this.cookiesService.get(CHECK_IF_LOGGED_IN);
    if(data) {
      this.employeeAuthority = JSON.parse(data);
    }

    console.log("#11", this.employeeAuthority );
  }
}
