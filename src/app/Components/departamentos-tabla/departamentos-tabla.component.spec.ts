import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosTablaComponent } from './departamentos-tabla.component';

describe('DepartamentosTablaComponent', () => {
  let component: DepartamentosTablaComponent;
  let fixture: ComponentFixture<DepartamentosTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentosTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
