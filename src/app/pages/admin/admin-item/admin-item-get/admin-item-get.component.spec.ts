import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemGetComponent } from './admin-item-get.component';

describe('AdminItemGetComponent', () => {
  let component: AdminItemGetComponent;
  let fixture: ComponentFixture<AdminItemGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminItemGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
