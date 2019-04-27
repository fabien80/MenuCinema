import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodToBasketComponent } from './add-food-to-basket.component';

describe('AddFoodToBasketComponent', () => {
  let component: AddFoodToBasketComponent;
  let fixture: ComponentFixture<AddFoodToBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFoodToBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodToBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
