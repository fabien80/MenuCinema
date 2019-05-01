import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountButtonsComponent } from './amount-buttons.component';

describe('AmountButtonsComponent', () => {
  let component: AmountButtonsComponent;
  let fixture: ComponentFixture<AmountButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
