import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBerCarComponent } from './menu-ber-car.component';

describe('MenuBerCarComponent', () => {
  let component: MenuBerCarComponent;
  let fixture: ComponentFixture<MenuBerCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBerCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBerCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
