import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemAllGetComponent } from './admin-item-all-get.component';

describe('AdminItemAllGetComponent', () => {
  let component: AdminItemAllGetComponent;
  let fixture: ComponentFixture<AdminItemAllGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemAllGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminItemAllGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
