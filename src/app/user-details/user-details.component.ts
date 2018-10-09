import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../users/users-grid/users.service";
import * as _ from 'lodash';
import {NationalFriendsService} from "./user-national-friends/national-friends.service";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.pug',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public fetchedUserId: string
  public fetchedUser: Object

  constructor(private route: ActivatedRoute,
              public usersService: UsersService,
              public nationalFriends: NationalFriendsService) {

    this.route.params.subscribe(params => this.fetchedUserId = params.id)
  }

  ngOnInit() {
    const createFetchedUser = () => this.fetchedUser = _.find(this.usersService.userList, user => user.login.uuid === this.fetchedUserId)

    this.usersService.userList.length ? createFetchedUser() : this.usersService.getUsers().subscribe(() => createFetchedUser())
  }

}
