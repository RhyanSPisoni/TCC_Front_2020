import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliavendasComponent } from './bibliavendas.component';

describe('BibliavendasComponent', () => {
  let component: BibliavendasComponent;
  let fixture: ComponentFixture<BibliavendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliavendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliavendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
