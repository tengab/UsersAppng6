import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.pug',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  fetchedUsedId: string

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.fetchedUsedId = params.id
      console.log(this.fetchedUsedId)
    });
  }

  ngOnInit() {
  }

}
