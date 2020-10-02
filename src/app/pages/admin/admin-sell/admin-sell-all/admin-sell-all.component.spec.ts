import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSellAllComponent } from './admin-sell-all.component';

describe('AdminSellAllComponent', () => {
  let component: AdminSellAllComponent;
  let fixture: ComponentFixture<AdminSellAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSellAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSellAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
