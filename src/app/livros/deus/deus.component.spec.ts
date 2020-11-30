import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeusComponent } from './deus.component';

describe('DeusComponent', () => {
  let component: DeusComponent;
  let fixture: ComponentFixture<DeusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
