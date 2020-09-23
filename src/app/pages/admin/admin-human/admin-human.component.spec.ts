import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHumanComponent } from './admin-human.component';

describe('AdminHumanComponent', () => {
  let component: AdminHumanComponent;
  let fixture: ComponentFixture<AdminHumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHumanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
