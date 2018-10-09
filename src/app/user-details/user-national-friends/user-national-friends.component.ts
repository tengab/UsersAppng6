import {Component, Input, OnInit} from '@angular/core';
import {NationalFriendsService} from "./national-friends.service";

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NationalFriendDialogComponent} from "./national-friend-dialog/national-friend-dialog.component";


@Component({
  selector: 'app-user-national-friends',
  templateUrl: './user-national-friends.component.pug',
  styleUrls: ['./user-national-friends.component.css']
})
export class UserNationalFriendsComponent implements OnInit {

  private isNationalFriendsVisible: boolean = true;

  @Input() fetchedUser;
  @Input() fetchedUserId;

  constructor(public nationalFriends: NationalFriendsService, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  clickedFriend(index) {
    this.nationalFriends.indexOfActiveNationalFriend = index.toString()
  }

  hideNationalFriends() {
    this.isNationalFriendsVisible = !this.isNationalFriendsVisible
  }

  showDialogWithNationalFriend(friend): void {
    const dialogRef = this.dialog.open(NationalFriendDialogComponent, {
      width: '400px',
      data: friend
    })
  }
}
