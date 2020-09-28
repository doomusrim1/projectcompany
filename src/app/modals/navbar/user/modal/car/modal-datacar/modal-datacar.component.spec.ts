import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDatacarComponent } from './modal-datacar.component';

describe('ModalDatacarComponent', () => {
  let component: ModalDatacarComponent;
  let fixture: ComponentFixture<ModalDatacarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDatacarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDatacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
