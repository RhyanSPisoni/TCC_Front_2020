import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Matematica5Component } from './matematica5.component';

describe('Matematica5Component', () => {
  let component: Matematica5Component;
  let fixture: ComponentFixture<Matematica5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Matematica5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Matematica5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
