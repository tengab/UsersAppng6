import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash'
import {NationalFriendsService} from "../user-national-friends/national-friends.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.pug',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() fetchedUser;
  @Input() fetchedUserId

  private isInfoVisible: boolean = true;
  constructor(public nationalFriendsService: NationalFriendsService) {

  }

  ngOnInit() {

  }

  searchForFriends() {
    this.nationalFriendsService.areFriendsSearched = true
    console.log('friends', this.nationalFriendsService.areFriendsSearched)
    this.nationalFriendsService.getFriends(this.fetchedUser.nat)

    // this.FriendsSearchService.getFriends(this.fetchedUser.nat);
    // this.FriendsSearchService.areFriendsSearched = true;
  }

  hideInfo() {
    this.isInfoVisible = !this.isInfoVisible
  }

}
