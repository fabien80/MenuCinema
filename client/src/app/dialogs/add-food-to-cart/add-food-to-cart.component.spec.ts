import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodToCartComponent } from './add-food-to-cart.component';

describe('AddFoodToCartComponent', () => {
  let component: AddFoodToCartComponent;
  let fixture: ComponentFixture<AddFoodToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFoodToCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
