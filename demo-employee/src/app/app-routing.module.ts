import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EmployeeCardsDisplayPageComponent
} from "./employee/employee-cards-display-page/employee-cards-display-page.component";
import {CreateEmployeePageComponent} from "./employee/create-employee-page/create-employee-page.component";
import {EmployeeDetailsPageComponent} from "./employee/employee-details-page/employee-details-page.component";

const routes: Routes = [
  { path : 'employees', component : EmployeeCardsDisplayPageComponent},
  { path : 'employees/create', component : CreateEmployeePageComponent},
  { path : 'employees/:id', component: EmployeeDetailsPageComponent},
  { path : '', redirectTo : "employees", pathMatch : "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
