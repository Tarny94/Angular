import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import {EmployeeCardPageComponent} from "../employee-card-page/employee-card-page.component";


@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  constructor(
    private serviceEmployee : EmployeeService,
    private dialogRef: MatDialogRef<EmployeeCardPageComponent>,
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data: IEmployee
  ) {
  }

  onDelete() {
    this.serviceEmployee.deleteEmployee(this.data.id).subscribe(
      value => console.log("#Succes Delete", value),
      error => console.log("Error", error),
      () => {
        this.dialogRef.close()
        console.log("Complete")
      }
    )
  }
}
