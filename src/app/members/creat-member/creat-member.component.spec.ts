import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatMemberComponent } from './creat-member.component';

describe('CreatMemberComponent', () => {
  let component: CreatMemberComponent;
  let fixture: ComponentFixture<CreatMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
