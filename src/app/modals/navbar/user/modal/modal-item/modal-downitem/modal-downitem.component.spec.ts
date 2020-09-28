import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDownitemComponent } from './modal-downitem.component';

describe('ModalDownitemComponent', () => {
  let component: ModalDownitemComponent;
  let fixture: ComponentFixture<ModalDownitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDownitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDownitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
