import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniacaBaseComponent } from './uniaca-base.component';

describe('UniacaBaseComponent', () => {
  let component: UniacaBaseComponent;
  let fixture: ComponentFixture<UniacaBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniacaBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniacaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
