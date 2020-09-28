import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCarComponent } from './tab-car.component';

describe('TabCarComponent', () => {
  let component: TabCarComponent;
  let fixture: ComponentFixture<TabCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
