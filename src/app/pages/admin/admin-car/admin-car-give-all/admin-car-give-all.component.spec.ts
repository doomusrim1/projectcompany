import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarGiveAllComponent } from './admin-car-give-all.component';

describe('AdminCarGiveAllComponent', () => {
  let component: AdminCarGiveAllComponent;
  let fixture: ComponentFixture<AdminCarGiveAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCarGiveAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarGiveAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
