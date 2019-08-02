import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeEventPage } from './make-event.page';

describe('MakeEventPage', () => {
  let component: MakeEventPage;
  let fixture: ComponentFixture<MakeEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
