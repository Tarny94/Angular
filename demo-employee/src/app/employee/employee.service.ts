import { Injectable } from '@angular/core';

import {Observable, shareReplay} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { IEmployee } from './employee';

// interface IEmployee {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   authority: string[];
// }

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url: string = 'http://localhost:8080/employees';

  employees$  = this.http.get<IEmployee[]>(this.url).pipe(
    // shareReplay(1),
  ) ;

  getEmployee(id : string | null): Observable<IEmployee> {
    console.log("#id: ", id)
    return  this.http.get<IEmployee>(`${this.url}/${id}`);
  }

  constructor(private http: HttpClient) {}

  createEmployee(employee : IEmployee): Observable<Object> {
    return this.http.post(this.url,employee);
  }

  editEmployee(employee: IEmployee){
    console.log("#5", employee)
    return this.http.put(this.url, employee);
  }

  getAllEmployee() : Observable<IEmployee[] | any> {
    return this.http.get(this.url);
  }

  deleteEmployee(id : string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
