import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAddmoneyComponent } from './sale-addmoney.component';

describe('SaleAddmoneyComponent', () => {
  let component: SaleAddmoneyComponent;
  let fixture: ComponentFixture<SaleAddmoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleAddmoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleAddmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
