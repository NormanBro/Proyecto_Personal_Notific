import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraTablaComponent } from './carrera-tabla.component';

describe('CarreraTablaComponent', () => {
  let component: CarreraTablaComponent;
  let fixture: ComponentFixture<CarreraTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreraTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreraTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
