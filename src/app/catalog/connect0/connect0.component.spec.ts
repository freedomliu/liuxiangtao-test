import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Connect0Component } from './connect0.component';

describe('Connect0Component', () => {
  let component: Connect0Component;
  let fixture: ComponentFixture<Connect0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Connect0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Connect0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
