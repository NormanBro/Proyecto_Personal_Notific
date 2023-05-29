import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosBaseComponent } from './usuarios-base.component';

describe('UsuariosBaseComponent', () => {
  let component: UsuariosBaseComponent;
  let fixture: ComponentFixture<UsuariosBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
