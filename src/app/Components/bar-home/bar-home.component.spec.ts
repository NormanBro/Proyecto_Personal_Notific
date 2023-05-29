import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarHomeComponent } from './bar-home.component';

describe('BarHomeComponent', () => {
  let component: BarHomeComponent;
  let fixture: ComponentFixture<BarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
