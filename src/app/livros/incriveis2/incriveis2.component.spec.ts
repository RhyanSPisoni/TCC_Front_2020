import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Incriveis2Component } from './incriveis2.component';

describe('Incriveis2Component', () => {
  let component: Incriveis2Component;
  let fixture: ComponentFixture<Incriveis2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Incriveis2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Incriveis2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
