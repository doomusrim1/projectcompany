import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditprofileComponent } from './modal-editprofile.component';

describe('ModalEditprofileComponent', () => {
  let component: ModalEditprofileComponent;
  let fixture: ComponentFixture<ModalEditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
