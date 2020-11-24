import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LEstrangeiraComponent } from './l-estrangeira.component';

describe('LEstrangeiraComponent', () => {
  let component: LEstrangeiraComponent;
  let fixture: ComponentFixture<LEstrangeiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LEstrangeiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LEstrangeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
