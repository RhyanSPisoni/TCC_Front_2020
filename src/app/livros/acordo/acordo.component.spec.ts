import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordoComponent } from './acordo.component';

describe('AcordoComponent', () => {
  let component: AcordoComponent;
  let fixture: ComponentFixture<AcordoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcordoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
