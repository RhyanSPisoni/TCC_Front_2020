import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OzComponent } from './oz.component';

describe('OzComponent', () => {
  let component: OzComponent;
  let fixture: ComponentFixture<OzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
