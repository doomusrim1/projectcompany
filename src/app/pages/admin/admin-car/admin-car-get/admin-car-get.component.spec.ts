import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarGetComponent } from './admin-car-get.component';

describe('AdminCarGetComponent', () => {
  let component: AdminCarGetComponent;
  let fixture: ComponentFixture<AdminCarGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCarGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
