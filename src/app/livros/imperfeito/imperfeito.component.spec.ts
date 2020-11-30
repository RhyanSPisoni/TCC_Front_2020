import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperfeitoComponent } from './imperfeito.component';

describe('ImperfeitoComponent', () => {
  let component: ImperfeitoComponent;
  let fixture: ComponentFixture<ImperfeitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImperfeitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImperfeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
