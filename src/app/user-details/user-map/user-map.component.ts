import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-map',
  templateUrl: './user-map.component.pug',
  styleUrls: ['./user-map.component.css']
})
export class UserMapComponent implements OnInit {

  @Input() fetchedUser;
  @Input() fetchedUserId;

  private isMapVisible: boolean = true;


  constructor() { }

  ngOnInit() {
  }

  hideMap() {
    this.isMapVisible = !this.isMapVisible
  }



}
