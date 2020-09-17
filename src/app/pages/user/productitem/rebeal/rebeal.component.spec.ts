import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebealComponent } from './rebeal.component';

describe('RebealComponent', () => {
  let component: RebealComponent;
  let fixture: ComponentFixture<RebealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RebealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RebealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
