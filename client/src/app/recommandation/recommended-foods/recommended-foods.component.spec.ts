import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedFoodsComponent } from './recommended-foods.component';

describe('RecommendedFoodsComponent', () => {
  let component: RecommendedFoodsComponent;
  let fixture: ComponentFixture<RecommendedFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
