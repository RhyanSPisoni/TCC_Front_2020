import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstitucionalComponent } from './constitucional.component';

describe('ConstitucionalComponent', () => {
  let component: ConstitucionalComponent;
  let fixture: ComponentFixture<ConstitucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstitucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
