import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemAllGiveComponent } from './admin-item-all-give.component';

describe('AdminItemAllGiveComponent', () => {
  let component: AdminItemAllGiveComponent;
  let fixture: ComponentFixture<AdminItemAllGiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemAllGiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminItemAllGiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
