import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrangeiraComponent } from './estrangeira.component';

describe('EstrangeiraComponent', () => {
  let component: EstrangeiraComponent;
  let fixture: ComponentFixture<EstrangeiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrangeiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrangeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
