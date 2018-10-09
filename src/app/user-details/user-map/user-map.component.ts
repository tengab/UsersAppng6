import {Component, Input, OnInit} from '@angular/core';
import {NationalFriendsService} from "../user-national-friends/national-friends.service";

@Component({
  selector: 'app-user-map',
  templateUrl: './user-map.component.pug',
  styleUrls: ['./user-map.component.css']
})
export class UserMapComponent implements OnInit {

  @Input() fetchedUser;
  @Input() fetchedUserId;

  private isMapVisible: boolean = true;


  constructor(public nationalFriends: NationalFriendsService) { }

  ngOnInit() {
  }

  hideMap() {
    this.isMapVisible = !this.isMapVisible
  }

  clickFromMarker(index) {
    this.nationalFriends.indexOfActiveNationalFriend = index
  }



}
