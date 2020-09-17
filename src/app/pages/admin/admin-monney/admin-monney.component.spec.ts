import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMonneyComponent } from './admin-monney.component';

describe('AdminMonneyComponent', () => {
  let component: AdminMonneyComponent;
  let fixture: ComponentFixture<AdminMonneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMonneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMonneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
