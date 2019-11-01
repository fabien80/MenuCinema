import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTestsecondComponent } from './movie-testsecond.component';

describe('MovieTestsecondComponent', () => {
  let component: MovieTestsecondComponent;
  let fixture: ComponentFixture<MovieTestsecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTestsecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTestsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
