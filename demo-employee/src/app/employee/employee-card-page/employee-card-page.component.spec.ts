import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardPageComponent } from './employee-card-page.component';

describe('EmployeeCardPageComponent', () => {
  let component: EmployeeCardPageComponent;
  let fixture: ComponentFixture<EmployeeCardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCardPageComponent]
    });
    fixture = TestBed.createComponent(EmployeeCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
