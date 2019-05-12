import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInformationComponent } from './menu-information.component';

describe('MenuInformationComponent', () => {
  let component: MenuInformationComponent;
  let fixture: ComponentFixture<MenuInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
