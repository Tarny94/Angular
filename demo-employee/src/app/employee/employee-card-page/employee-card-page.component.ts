import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';
import {ConfirmModalComponent} from "../confirm-modal/confirm-modal.component";
import {UpdateEmployeePageComponent} from "../update-employee-page/update-employee-page.component";
import { Store } from '@ngrx/store';
import { getCurrentEmployee, getShowEmployeeCode } from '../state/employee.reducer';
@Component({
  selector: 'app-employee-card-page',
  templateUrl: './employee-card-page.component.html',
  styleUrls: ['./employee-card-page.component.scss']
})
export class EmployeeCardPageComponent implements OnInit {
  @Input() id: string = '';
  @Input() firstName : string = "";
  @Input() lastName : string = "";
  @Input() email : string = "";
  @Input() phone : string = "";
  @Input() authority : string[] = [];
  @Input() employee$!: Observable<IEmployee[]> ;
  @Output() employeeUpdated : EventEmitter<boolean> = new EventEmitter<boolean>();

   id2: string = '';
   firstName2 : string = "";
   lastName2 : string = "";
   email2 : string = "";
   phone2 : string = "";
   authority2 : string[] = [];

  employeeStore! : IEmployee; 

  constructor(
    public dialog: MatDialog,
    private store : Store
    ) {
  }

  ngOnInit(): void {
    this.store.select(getCurrentEmployee).subscribe((item) : IEmployee => {
      console.log("##employee: ", item);   
      return this.employeeStore = item
    }
    )   
  }

  onSubmit() {
    const dialogRef= this.dialog.open(UpdateEmployeePageComponent,{
        data: {
          id: this.id,
          firstName :this.firstName,
          lastName: this.lastName,
          email : this.email,
          phone: this.phone,
          authority: this.authority
        }
      }
    )
    dialogRef.afterClosed().subscribe(
      result => {
       if(result) this.employeeUpdated.emit();
      })
  }

  onDelete() {
    const dialogRef = this.dialog.open(ConfirmModalComponent,{
      data: {
        id: this.id
      }
    })
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) this.employeeUpdated.emit(result);
      })
  }
}
