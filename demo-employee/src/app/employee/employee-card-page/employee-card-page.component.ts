import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CHECK_IF_LOGGED_IN, IEmployee, ILoggedInData } from '../employee';
import {ConfirmModalComponent} from "../confirm-modal/confirm-modal.component";
import {UpdateEmployeePageComponent} from "../update-employee-page/update-employee-page.component";
import { CookieService } from 'ngx-cookie-service';
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
  @Input() employeeAuthority! : ILoggedInData;

  @Output() employeeUpdated : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.handleEditValidation()
  }

  handleEditValidation(){
    const isAuthorizated = this.employeeAuthority.authority.find(
      item => item.toLowerCase() === "manager" || item === "admin")
    
    if(isAuthorizated) return false;
    return true;
  }

  handleDeleteValidation(){
    const isAuthorizated = this.employeeAuthority.authority.find(item => item.toLowerCase() === "admin")
    
    if(isAuthorizated) return false;
    return true;
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
