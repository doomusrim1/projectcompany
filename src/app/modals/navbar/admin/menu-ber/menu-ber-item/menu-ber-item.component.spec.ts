import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBerItemComponent } from './menu-ber-item.component';

describe('MenuBerItemComponent', () => {
  let component: MenuBerItemComponent;
  let fixture: ComponentFixture<MenuBerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
