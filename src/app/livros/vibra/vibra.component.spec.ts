import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VibraComponent } from './vibra.component';

describe('VibraComponent', () => {
  let component: VibraComponent;
  let fixture: ComponentFixture<VibraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VibraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VibraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
