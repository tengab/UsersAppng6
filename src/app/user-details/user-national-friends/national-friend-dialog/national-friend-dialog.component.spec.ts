import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalFriendDialogComponent } from './national-friend-dialog.component';

describe('NationalFriendDialogComponent', () => {
  let component: NationalFriendDialogComponent;
  let fixture: ComponentFixture<NationalFriendDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalFriendDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalFriendDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
