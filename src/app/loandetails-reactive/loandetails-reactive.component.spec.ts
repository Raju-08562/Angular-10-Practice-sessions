import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandetailsReactiveComponent } from './loandetails-reactive.component';

describe('LoandetailsReactiveComponent', () => {
  let component: LoandetailsReactiveComponent;
  let fixture: ComponentFixture<LoandetailsReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoandetailsReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoandetailsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
