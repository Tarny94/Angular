import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardsDisplayPageComponent } from './employee-cards-display-page.component';

describe('EmployeeCardsDisplayPageComponent', () => {
  let component: EmployeeCardsDisplayPageComponent;
  let fixture: ComponentFixture<EmployeeCardsDisplayPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCardsDisplayPageComponent]
    });
    fixture = TestBed.createComponent(EmployeeCardsDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
