import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNationalFriendsComponent } from './user-national-friends.component';

describe('UserNationalFriendsComponent', () => {
  let component: UserNationalFriendsComponent;
  let fixture: ComponentFixture<UserNationalFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNationalFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNationalFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
