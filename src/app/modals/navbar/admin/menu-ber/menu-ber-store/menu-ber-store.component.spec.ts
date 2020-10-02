import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBerStoreComponent } from './menu-ber-store.component';

describe('MenuBerStoreComponent', () => {
  let component: MenuBerStoreComponent;
  let fixture: ComponentFixture<MenuBerStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBerStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBerStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
