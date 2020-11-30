import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessualComponent } from './processual.component';

describe('ProcessualComponent', () => {
  let component: ProcessualComponent;
  let fixture: ComponentFixture<ProcessualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
