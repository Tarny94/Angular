import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEmployeePageComponent } from './header-employee-page.component';

describe('HeaderEmployeePageComponent', () => {
  let component: HeaderEmployeePageComponent;
  let fixture: ComponentFixture<HeaderEmployeePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderEmployeePageComponent]
    });
    fixture = TestBed.createComponent(HeaderEmployeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
