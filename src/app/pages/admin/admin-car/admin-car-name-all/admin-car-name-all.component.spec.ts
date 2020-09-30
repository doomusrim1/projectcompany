import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarNameAllComponent } from './admin-car-name-all.component';

describe('AdminCarNameAllComponent', () => {
  let component: AdminCarNameAllComponent;
  let fixture: ComponentFixture<AdminCarNameAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCarNameAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarNameAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
