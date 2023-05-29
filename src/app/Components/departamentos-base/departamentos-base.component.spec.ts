import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosBaseComponent } from './departamentos-base.component';

describe('DepartamentosBaseComponent', () => {
  let component: DepartamentosBaseComponent;
  let fixture: ComponentFixture<DepartamentosBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentosBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentosBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
