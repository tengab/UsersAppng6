import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../users/iuser";
import {map} from "rxjs/operators";
import {UserBuilderService} from "../../users/users-grid/user-builder.service";

@Injectable({
  providedIn: 'root'
})
export class NationalFriendsService {

  public areFriendsSearched: boolean = false;
  public nationalFriendsList: IUser[];
  public indexOfActiveNationalFriend: string;

  constructor(private http: HttpClient, public userBuilder: UserBuilderService) {

  }

  getFriends(nationality) {
    return this.http.get<any>(`https://randomuser.me/api/?results=6&nat=${nationality}`)
      .subscribe(response => {
        this.nationalFriendsList = response.results.map(user => this.userBuilder.mapUser(user))
        console.log(this.nationalFriendsList)
      })
  }


}
