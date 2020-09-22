import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBerMonneyComponent } from './menu-ber-monney.component';

describe('MenuBerMonneyComponent', () => {
  let component: MenuBerMonneyComponent;
  let fixture: ComponentFixture<MenuBerMonneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBerMonneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBerMonneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
