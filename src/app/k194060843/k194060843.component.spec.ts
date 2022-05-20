import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K194060843Component } from './k194060843.component';

describe('K194060843Component', () => {
  let component: K194060843Component;
  let fixture: ComponentFixture<K194060843Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ K194060843Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(K194060843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
