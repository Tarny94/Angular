import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { CreateEmployeePageComponent } from './create-employee-page/create-employee-page.component';
import { EmployeeCardPageComponent } from './employee-card-page/employee-card-page.component';
import { EmployeeCardsDisplayPageComponent } from './employee-cards-display-page/employee-cards-display-page.component';
import { EmployeeDetailsPageComponent } from './employee-details-page/employee-details-page.component';
import { EmployeeTableDisplayPageComponent } from './employee-table-display-page/employee-table-display-page.component';
import { HeaderEmployeePageComponent } from './header-employee-page/header-employee-page.component';
import { UpdateEmployeePageComponent } from './update-employee-page/update-employee-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/employee.reducer';



@NgModule({
  declarations: [
    EmployeeCardPageComponent,
    EmployeeCardsDisplayPageComponent,
    EmployeeTableDisplayPageComponent,
    CreateEmployeePageComponent,
    UpdateEmployeePageComponent,
    ConfirmModalComponent,
    HeaderEmployeePageComponent,
    EmployeeDetailsPageComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule,
    StoreModule.forFeature("employee",productReducer)
  ]
})
export class EmployeeModule { }
