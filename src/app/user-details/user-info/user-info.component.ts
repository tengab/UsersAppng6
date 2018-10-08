import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.pug',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() fetchedUser;
  @Input() fetchedUserId

  private isInfoVisible: boolean = true;
  constructor() {

  }

  ngOnInit() {

  }

  hideInfo() {
    this.isInfoVisible = !this.isInfoVisible
  }

}
