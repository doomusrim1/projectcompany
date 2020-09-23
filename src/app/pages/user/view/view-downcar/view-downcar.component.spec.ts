import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDowncarComponent } from './view-downcar.component';

describe('ViewDowncarComponent', () => {
  let component: ViewDowncarComponent;
  let fixture: ComponentFixture<ViewDowncarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDowncarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDowncarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
