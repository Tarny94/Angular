import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {IEmployee} from "../employee";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-employee-details-page',
  templateUrl: './employee-details-page.component.html',
  styleUrls: ['./employee-details-page.component.scss']
})
export class EmployeeDetailsPageComponent implements OnInit{

  employee: IEmployee = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    authority : []
  }
  constructor(private employeeService : EmployeeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  onUpdate() {
    this.router.navigate(['employees'])
  }

  loadData() {
    this.route.paramMap.subscribe(params => {
      this.employeeService.getEmployee(params.get("id")).subscribe( employee =>
        this.employee = employee
      )
    })
  }

  ngOnInit(): void {
     this.loadData()
  }
}
