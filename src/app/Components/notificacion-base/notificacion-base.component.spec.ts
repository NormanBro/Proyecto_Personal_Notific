import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionBaseComponent } from './notificacion-base.component';

describe('NotificacionBaseComponent', () => {
  let component: NotificacionBaseComponent;
  let fixture: ComponentFixture<NotificacionBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacionBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
