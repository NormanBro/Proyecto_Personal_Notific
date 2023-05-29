import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddUnidadComponent } from './dialog-add-unidad.component';

describe('DialogAddUnidadComponent', () => {
  let component: DialogAddUnidadComponent;
  let fixture: ComponentFixture<DialogAddUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddUnidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
