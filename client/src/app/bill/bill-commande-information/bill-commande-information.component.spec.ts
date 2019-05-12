import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCommandeInformationComponent } from './bill-commande-information.component';

describe('BillCommandeInformationComponent', () => {
  let component: BillCommandeInformationComponent;
  let fixture: ComponentFixture<BillCommandeInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillCommandeInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillCommandeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
