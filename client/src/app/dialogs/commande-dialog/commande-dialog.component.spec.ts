import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeDialogComponent } from './commande-dialog.component';

describe('CommandeDialogComponent', () => {
  let component: CommandeDialogComponent;
  let fixture: ComponentFixture<CommandeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
