import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrangeiranordicosComponent } from './estrangeiranordicos.component';

describe('EstrangeiranordicosComponent', () => {
  let component: EstrangeiranordicosComponent;
  let fixture: ComponentFixture<EstrangeiranordicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrangeiranordicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrangeiranordicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
