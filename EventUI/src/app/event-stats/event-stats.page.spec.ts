import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventStatsPage } from './event-stats.page';

describe('EventStatsPage', () => {
  let component: EventStatsPage;
  let fixture: ComponentFixture<EventStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventStatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
