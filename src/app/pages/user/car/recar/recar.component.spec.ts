import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecarComponent } from './recar.component';

describe('RecarComponent', () => {
  let component: RecarComponent;
  let fixture: ComponentFixture<RecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
