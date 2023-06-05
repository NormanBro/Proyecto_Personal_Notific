import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddNotificacionComponent } from './dialog-add-notificacion.component';

describe('DialogAddNotificacionComponent', () => {
  let component: DialogAddNotificacionComponent;
  let fixture: ComponentFixture<DialogAddNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddNotificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
