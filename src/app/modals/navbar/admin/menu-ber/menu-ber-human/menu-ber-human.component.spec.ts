import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBerHumanComponent } from './menu-ber-human.component';

describe('MenuBerHumanComponent', () => {
  let component: MenuBerHumanComponent;
  let fixture: ComponentFixture<MenuBerHumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBerHumanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBerHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
