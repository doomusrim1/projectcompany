import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBerSellComponent } from './menu-ber-sell.component';

describe('MenuBerSellComponent', () => {
  let component: MenuBerSellComponent;
  let fixture: ComponentFixture<MenuBerSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBerSellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBerSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
