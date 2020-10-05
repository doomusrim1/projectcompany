import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddcarComponent } from './modal-addcar.component';

describe('ModalAddcarComponent', () => {
  let component: ModalAddcarComponent;
  let fixture: ComponentFixture<ModalAddcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddcarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
