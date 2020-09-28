import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDowncarComponent } from './modal-downcar.component';

describe('ModalDowncarComponent', () => {
  let component: ModalDowncarComponent;
  let fixture: ComponentFixture<ModalDowncarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDowncarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDowncarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
