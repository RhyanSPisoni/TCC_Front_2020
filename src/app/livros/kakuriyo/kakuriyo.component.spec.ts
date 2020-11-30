import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KakuriyoComponent } from './kakuriyo.component';

describe('KakuriyoComponent', () => {
  let component: KakuriyoComponent;
  let fixture: ComponentFixture<KakuriyoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KakuriyoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KakuriyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
