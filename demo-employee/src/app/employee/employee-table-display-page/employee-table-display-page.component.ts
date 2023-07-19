import {Component, Input, OnDestroy, OnInit, VERSION} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {
  BehaviorSubject,
  filter,
  from,
  map,
  Observable,
  of,
  shareReplay,
  Subscription,
  take,
  tap
} from "rxjs";
import {IEmployee} from "../employee";
import {Router} from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { setCurrentEmployee } from '../employee.actions';
import { getEmployees } from '../state/employee.reducer';

@Component({
  selector: 'app-employee-table-display-page',
  templateUrl: './employee-table-display-page.component.html',
  styleUrls: ['./employee-table-display-page.component.scss']
})
export class EmployeeTableDisplayPageComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'authority'];

  @Input() employees$! : Observable<IEmployee[]>

  employeeList : IEmployee[] = [];

  employee!: IEmployee;

  constructor(
     private service : EmployeeService,
     private router : Router,
     private store : Store
    ) {
  }
  ngOnInit(): void {
    this.store.select(getEmployees).subscribe(item => {
      this.employeeList = item
      console.log("@@@1", this.employeeList);
    })
    console.log("@@@2", this.employeeList);
  }

  onClick(employeeId: string) {
    this.employees$.subscribe(items =>{
      items.map(item => {
        if(item.id ===employeeId) {
          this.handleTestReduxDispachEmployee(item)
        }
      })
   }
  )
    this.router.navigate(['employees',employeeId])
  }

  handleTestReduxDispachEmployee(employee : IEmployee) {
    this.store.dispatch(setCurrentEmployee({employee}))
  }
  
  test() {
    const apples= ['apple1', 'apple2']

    // of(2,4,6).pipe(
    //   take(2),
    //   map(item => item * 2),
    //   map(item => item - 3),
    //   tap(item => console.log("tap", item + 2))
    // ).subscribe({
    //   next : (value) => console.log("of",value),
    //   error:  (error) => console.log(error),
    //   complete: () => console.log("Complete of")
    // })

    // const observable = new Observable(observe => {
    //   observe.next(3);
    //   observe.next(2);
    //   observe.next(10);
    //   observe.complete()
    // })

    const observable = new Observable(observe => {
      observe.next([3,5,6]);
      observe.next([2,6,7,4]);
      observe.complete()
    })

    observable.pipe(
      take(2)
    ).subscribe( {
      next: (value : any) => of(...value).pipe(
        take(3)
      ).subscribe({
        next : (value) => console.log("from",value),
        error:  (error) => console.log(error),
        complete: () => console.log("Complete")
      }),
      error: (error) => console.log(error),
      complete: () => console.log("Complete2")
    })

    //  from([2,4,6,5,3,6]).pipe(
    //
    //    map(item => item * 2),
    //    map(item => item - 3),
    //    tap(item => console.log("tap", item + 2)),
    //  take(3)
    //  ).subscribe({
    //    next : (value) => console.log("from",value),
    //    error:  (error) => console.log(error),
    //    complete: () => console.log("Complete")
    // })
  }
}
