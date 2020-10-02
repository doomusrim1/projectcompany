import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStorePriceComponent } from './admin-store-price.component';

describe('AdminStorePriceComponent', () => {
  let component: AdminStorePriceComponent;
  let fixture: ComponentFixture<AdminStorePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStorePriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStorePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
