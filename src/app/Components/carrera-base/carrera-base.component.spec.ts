import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraBaseComponent } from './carrera-base.component';

describe('CarreraBaseComponent', () => {
  let component: CarreraBaseComponent;
  let fixture: ComponentFixture<CarreraBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreraBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreraBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
