import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddCarreraComponent } from './dialog-add-carrera.component';

describe('DialogAddCarreraComponent', () => {
  let component: DialogAddCarreraComponent;
  let fixture: ComponentFixture<DialogAddCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddCarreraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
