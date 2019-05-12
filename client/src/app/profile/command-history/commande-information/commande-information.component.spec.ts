import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeInformationComponent } from './commande-information.component';

describe('CommandeInformationComponent', () => {
  let component: CommandeInformationComponent;
  let fixture: ComponentFixture<CommandeInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
