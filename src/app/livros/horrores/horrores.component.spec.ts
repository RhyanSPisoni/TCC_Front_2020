import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorroresComponent } from './horrores.component';

describe('HorroresComponent', () => {
  let component: HorroresComponent;
  let fixture: ComponentFixture<HorroresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorroresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorroresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
