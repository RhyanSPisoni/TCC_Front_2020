import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SutilComponent } from './sutil.component';

describe('SutilComponent', () => {
  let component: SutilComponent;
  let fixture: ComponentFixture<SutilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SutilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
