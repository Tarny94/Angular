import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-create-employee-page',
  templateUrl: './create-employee-page.component.html',
  styleUrls: ['./create-employee-page.component.scss']
})
export class CreateEmployeePageComponent implements OnInit,  OnDestroy{
  customerForm!: FormGroup;
  employee = new Employee();

  subscription: Subscription = new Subscription();

  invalid: any = {
    color: 'red'
  }

  constructor(public service : EmployeeService,
              private router : Router,
              private fb: FormBuilder
  ) {
  }

  onSubmit() {

    console.log("#2", this.customerForm)
    this.subscription.add(this.service.createEmployee(this.customerForm.value).subscribe( response => {

      console.log("Successful", response)
      this.handleCancelButton();
    }, error => {
      console.log("Fail", error)
    }))
  }

  handleCancelButton() {
    this.router.navigate(['/employees']);
  }

  phoneValidator(): boolean{
    const phoneNumber = this.customerForm.value.phone;
    const hasLetters = /[a-zA-Z]/.test(phoneNumber);

    return hasLetters ;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName : ["", [Validators.required,Validators.minLength(3)]],
      lastName : ["", [Validators.required,Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required,Validators.minLength(6)]],
      authority: [[],[Validators.required]]
    })
  }
}
