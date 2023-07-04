import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Employee, IEmployee} from '../employee';
import {EmployeeService} from '../employee.service';
import {EmployeeCardPageComponent} from "../employee-card-page/employee-card-page.component";

@Component({
  selector: 'app-update-employee-page',
  templateUrl: './update-employee-page.component.html',
  styleUrls: ['./update-employee-page.component.scss']
})
export class UpdateEmployeePageComponent implements OnInit{

  employee: Employee = new Employee();


  constructor(
    private serviceEmployee : EmployeeService,
    private dialogRef: MatDialogRef<EmployeeCardPageComponent>,
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data: IEmployee
  ) {
  }

  onSubmit() {
    this.serviceEmployee.editEmployee(this.data).subscribe(
      value => {
        console.log("Edit Completed:", value)
        this.dialogRef.close(true)
      },
      error => console.log("Error",error),
      () => {
        console.log("Complete")
      }
    )
  }

  phoneValidator(phoneNumber: string): boolean{
    return /[a-zA-Z]/.test(phoneNumber) ;
  }

  ngOnInit(): void {
    console.log("#inj", this.data)
  }
}
