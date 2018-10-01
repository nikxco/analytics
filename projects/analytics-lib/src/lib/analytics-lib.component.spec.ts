import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsLibComponent } from './analytics-lib.component';

describe('AnalyticsLibComponent', () => {
  let component: AnalyticsLibComponent;
  let fixture: ComponentFixture<AnalyticsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
