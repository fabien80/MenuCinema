import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillMenuInformationComponent } from './bill-menu-information.component';

describe('BillMenuInformationComponent', () => {
  let component: BillMenuInformationComponent;
  let fixture: ComponentFixture<BillMenuInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillMenuInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillMenuInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
