import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {IUser} from "../../../users/iuser";

@Component({
  selector: 'app-national-friend-dialog',
  templateUrl: './national-friend-dialog.component.pug',
  styleUrls: ['./national-friend-dialog.component.css']
})
export class NationalFriendDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NationalFriendDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUser) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
