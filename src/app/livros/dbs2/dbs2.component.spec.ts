import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dbs2Component } from './dbs2.component';

describe('Dbs2Component', () => {
  let component: Dbs2Component;
  let fixture: ComponentFixture<Dbs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dbs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dbs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
