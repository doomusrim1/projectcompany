import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSaleComponent } from './tab-sale.component';

describe('TabSaleComponent', () => {
  let component: TabSaleComponent;
  let fixture: ComponentFixture<TabSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
