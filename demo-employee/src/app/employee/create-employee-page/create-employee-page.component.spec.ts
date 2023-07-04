import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeePageComponent } from './create-employee-page.component';

describe('CreateEmployeePageComponent', () => {
  let component: CreateEmployeePageComponent;
  let fixture: ComponentFixture<CreateEmployeePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmployeePageComponent]
    });
    fixture = TestBed.createComponent(CreateEmployeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
