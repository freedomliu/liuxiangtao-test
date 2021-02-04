import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Connect1Component } from './connect1.component';

describe('Connect1Component', () => {
  let component: Connect1Component;
  let fixture: ComponentFixture<Connect1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Connect1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Connect1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
