import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoomsPage } from './user-rooms.page';

describe('UserRoomsPage', () => {
  let component: UserRoomsPage;
  let fixture: ComponentFixture<UserRoomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRoomsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
