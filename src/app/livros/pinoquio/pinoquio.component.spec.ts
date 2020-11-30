import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinoquioComponent } from './pinoquio.component';

describe('PinoquioComponent', () => {
  let component: PinoquioComponent;
  let fixture: ComponentFixture<PinoquioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinoquioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinoquioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
