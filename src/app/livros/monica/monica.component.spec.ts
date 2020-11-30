import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonicaComponent } from './monica.component';

describe('MonicaComponent', () => {
  let component: MonicaComponent;
  let fixture: ComponentFixture<MonicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
