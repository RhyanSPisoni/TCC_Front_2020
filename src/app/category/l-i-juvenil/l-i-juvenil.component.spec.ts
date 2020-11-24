import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LIJuvenilComponent } from './l-i-juvenil.component';

describe('LIJuvenilComponent', () => {
  let component: LIJuvenilComponent;
  let fixture: ComponentFixture<LIJuvenilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LIJuvenilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LIJuvenilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
