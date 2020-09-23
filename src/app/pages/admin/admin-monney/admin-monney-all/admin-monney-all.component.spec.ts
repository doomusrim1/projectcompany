import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMonneyAllComponent } from './admin-monney-all.component';

describe('AdminMonneyAllComponent', () => {
  let component: AdminMonneyAllComponent;
  let fixture: ComponentFixture<AdminMonneyAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMonneyAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMonneyAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
