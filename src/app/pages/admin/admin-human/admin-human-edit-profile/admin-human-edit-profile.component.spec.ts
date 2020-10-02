import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHumanEditProfileComponent } from './admin-human-edit-profile.component';

describe('AdminHumanEditProfileComponent', () => {
  let component: AdminHumanEditProfileComponent;
  let fixture: ComponentFixture<AdminHumanEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHumanEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHumanEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
