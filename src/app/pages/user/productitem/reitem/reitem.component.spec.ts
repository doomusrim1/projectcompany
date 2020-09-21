import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReitemComponent } from './reitem.component';

describe('ReitemComponent', () => {
  let component: ReitemComponent;
  let fixture: ComponentFixture<ReitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
