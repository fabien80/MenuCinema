import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductToBasketComponent } from './add-product-to-basket.component';

describe('AddProductToBasketComponent', () => {
  let component: AddProductToBasketComponent;
  let fixture: ComponentFixture<AddProductToBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductToBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductToBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
