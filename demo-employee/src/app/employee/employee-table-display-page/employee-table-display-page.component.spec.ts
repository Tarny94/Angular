import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTableDisplayPageComponent } from './employee-table-display-page.component';

describe('EmployeeTableDisplayPageComponent', () => {
  let component: EmployeeTableDisplayPageComponent;
  let fixture: ComponentFixture<EmployeeTableDisplayPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeTableDisplayPageComponent]
    });
    fixture = TestBed.createComponent(EmployeeTableDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
