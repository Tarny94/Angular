import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from "@angular/common/http";
import { EmployeeCardPageComponent } from './employee/employee-card-page/employee-card-page.component';
import { EmployeeCardsDisplayPageComponent } from './employee/employee-cards-display-page/employee-cards-display-page.component';
import { EmployeeTableDisplayPageComponent } from './employee/employee-table-display-page/employee-table-display-page.component';
import { CreateEmployeePageComponent } from './employee/create-employee-page/create-employee-page.component';
import { UpdateEmployeePageComponent } from './employee/update-employee-page/update-employee-page.component';
import { ConfirmModalComponent } from './employee/confirm-modal/confirm-modal.component';
import { HeaderEmployeePageComponent } from './employee/header-employee-page/header-employee-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardPageComponent,
    EmployeeCardsDisplayPageComponent,
    EmployeeTableDisplayPageComponent,
    CreateEmployeePageComponent,
    UpdateEmployeePageComponent,
    ConfirmModalComponent,
    HeaderEmployeePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
