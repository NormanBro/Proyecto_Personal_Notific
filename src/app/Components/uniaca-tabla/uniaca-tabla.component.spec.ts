import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniacaTablaComponent } from './uniaca-tabla.component';

describe('UniacaTablaComponent', () => {
  let component: UniacaTablaComponent;
  let fixture: ComponentFixture<UniacaTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniacaTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniacaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
