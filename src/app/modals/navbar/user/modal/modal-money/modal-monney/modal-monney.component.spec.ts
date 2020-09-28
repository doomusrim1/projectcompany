import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMonneyComponent } from './modal-monney.component';

describe('ModalMonneyComponent', () => {
  let component: ModalMonneyComponent;
  let fixture: ComponentFixture<ModalMonneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMonneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMonneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
