import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReservationsPage } from './user-reservations.page';

describe('UserReservationsPage', () => {
  let component: UserReservationsPage;
  let fixture: ComponentFixture<UserReservationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReservationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
