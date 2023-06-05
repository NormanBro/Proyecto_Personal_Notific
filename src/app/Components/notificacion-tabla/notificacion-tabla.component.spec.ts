import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionTablaComponent } from './notificacion-tabla.component';

describe('NotificacionTablaComponent', () => {
  let component: NotificacionTablaComponent;
  let fixture: ComponentFixture<NotificacionTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacionTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
