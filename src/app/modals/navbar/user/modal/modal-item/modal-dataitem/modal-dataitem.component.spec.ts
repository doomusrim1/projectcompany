import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDataitemComponent } from './modal-dataitem.component';

describe('ModalDataitemComponent', () => {
  let component: ModalDataitemComponent;
  let fixture: ComponentFixture<ModalDataitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDataitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDataitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
