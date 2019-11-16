import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRoomsRentListPage } from './meeting-rooms-rent-list.page';

describe('MeetingRoomsRentListPage', () => {
  let component: MeetingRoomsRentListPage;
  let fixture: ComponentFixture<MeetingRoomsRentListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingRoomsRentListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingRoomsRentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
