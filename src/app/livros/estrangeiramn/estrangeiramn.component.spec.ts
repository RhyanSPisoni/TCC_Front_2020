import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrangeiramnComponent } from './estrangeiramn.component';

describe('EstrangeiramnComponent', () => {
  let component: EstrangeiramnComponent;
  let fixture: ComponentFixture<EstrangeiramnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrangeiramnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrangeiramnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
