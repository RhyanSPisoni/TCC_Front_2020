import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinaComponent } from './medicina.component';

describe('MedicinaComponent', () => {
  let component: MedicinaComponent;
  let fixture: ComponentFixture<MedicinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});