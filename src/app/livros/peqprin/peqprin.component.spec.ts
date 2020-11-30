import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeqprinComponent } from './peqprin.component';

describe('PeqprinComponent', () => {
  let component: PeqprinComponent;
  let fixture: ComponentFixture<PeqprinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeqprinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeqprinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
