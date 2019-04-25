import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionFoodComponent } from './selection-food.component';

describe('SelectionFoodComponent', () => {
  let component: SelectionFoodComponent;
  let fixture: ComponentFixture<SelectionFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
