import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDownitemComponent } from './view-downitem.component';

describe('ViewDownitemComponent', () => {
  let component: ViewDownitemComponent;
  let fixture: ComponentFixture<ViewDownitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDownitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDownitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
