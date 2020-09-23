import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcarComponent } from './upcar.component';

describe('UpcarComponent', () => {
  let component: UpcarComponent;
  let fixture: ComponentFixture<UpcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
