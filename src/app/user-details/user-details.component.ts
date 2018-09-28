import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../users/users-grid/users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.pug',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public fetchedUserId: string



  constructor(private route: ActivatedRoute,
              public usersService: UsersService) {

    this.route.params.subscribe(params => {
      this.fetchedUserId = params.id
      console.log('feczet', this.fetchedUserId)
    });
    console.log('from user-details', this.usersService.userList)
  }

  ngOnInit() {
    console.log('from user-details', this.usersService.userList)
  }

}
