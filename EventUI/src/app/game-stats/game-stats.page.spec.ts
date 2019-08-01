import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStatsPage } from './game-stats.page';

describe('GameStatsPage', () => {
  let component: GameStatsPage;
  let fixture: ComponentFixture<GameStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
