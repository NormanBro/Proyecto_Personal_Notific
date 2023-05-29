import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddDepartamentoComponent } from './dialog-add-departamento.component';

describe('DialogAddDepartamentoComponent', () => {
  let component: DialogAddDepartamentoComponent;
  let fixture: ComponentFixture<DialogAddDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddDepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
