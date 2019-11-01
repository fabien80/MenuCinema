import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTestComponent } from './movie-test.component';

describe('MovieTestComponent', () => {
  let component: MovieTestComponent;
  let fixture: ComponentFixture<MovieTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
