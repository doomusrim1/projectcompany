import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarGetAllComponent } from './admin-car-get-all.component';

describe('AdminCarGetAllComponent', () => {
  let component: AdminCarGetAllComponent;
  let fixture: ComponentFixture<AdminCarGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCarGetAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
