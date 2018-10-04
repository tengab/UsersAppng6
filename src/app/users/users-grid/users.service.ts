import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import * as _ from 'lodash';
import {UserBuilderService} from "./user-builder.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userList: any = [];

  constructor(private http: HttpClient,
              public userBuilder: UserBuilderService) {
  }


  getUsers() {
    return this.http.get<any>('http://localhost:3000/users')
      .pipe(
        map(response => {
          this.userList = response.map( user => this.userBuilder.mapUser(user));
          return this.userList;
        }),
      )
  }

  deleteUser(event) {
    return this.http.delete<any>(`http://localhost:3000/users/${event.data.login.uuid}`)
      .pipe(
        map(response => {
          _.remove(this.userList, user => user.login.uuid === response.id);
          return response;
        })
      )
  }

// addUser(event) {
//   console.log('uuid', event.data.login.uuid)
//
//   this.http.post(`http://localhost:3000/users/${event.data.login.uuid}`)
//     .pipe(
//       map(response => {
//         // _.remove(this.userList, user => user.login.uuid ===  event.data.login.uuid)
//         _.remove(this.userList, user => user.login.uuid ===  response.data.id)
//         this.userList = response;
//         // console.log('zpajpa',response)
//         return response.data;
//       }),
//     )
//   // .subscribe(response => console.log('resp',response))
// }
}

