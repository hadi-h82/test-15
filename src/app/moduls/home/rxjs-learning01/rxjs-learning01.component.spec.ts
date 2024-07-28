import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLearning01Component } from './rxjs-learning01.component';

describe('RxjsLearning01Component', () => {
  let component: RxjsLearning01Component;
  let fixture: ComponentFixture<RxjsLearning01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsLearning01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsLearning01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
