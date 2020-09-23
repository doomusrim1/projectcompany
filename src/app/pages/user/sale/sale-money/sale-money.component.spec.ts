import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleMoneyComponent } from './sale-money.component';

describe('SaleMoneyComponent', () => {
  let component: SaleMoneyComponent;
  let fixture: ComponentFixture<SaleMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
