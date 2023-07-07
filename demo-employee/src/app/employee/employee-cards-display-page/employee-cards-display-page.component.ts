import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable, Subject, tap } from 'rxjs';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-employee-cards-display-page',
  templateUrl: './employee-cards-display-page.component.html',
  styleUrls: ['./employee-cards-display-page.component.scss']
})
export class EmployeeCardsDisplayPageComponent implements OnInit{

  isTable : boolean = false;

  filterByName= new BehaviorSubject<string>("");
  filterByNameAction$ = this.filterByName.asObservable();

  employees$! : Observable<IEmployee[]>;

  constructor(
    private employeeService : EmployeeService,
    private router : Router,
    private store: Store<any>
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

  handleIsTable() {
   // this.isTable = !this.isTable
   this.store.dispatch({
    type: "[Table] Toggle Table Code"
   })
  }
  onSelected(value : string) {
    this.filterByName.next(value);
  }

  handleAddEmployee(){
    this.router.navigate(["/employees/create"])
  }

  ngOnInit(): void {
    this.loadData()
    this.store.select("employee").subscribe(
      product => {
        this.isTable = product.showTableCode
      }
    )
  }
}
