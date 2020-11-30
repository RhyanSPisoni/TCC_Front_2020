import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlhosComponent } from './olhos.component';

describe('OlhosComponent', () => {
  let component: OlhosComponent;
  let fixture: ComponentFixture<OlhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
