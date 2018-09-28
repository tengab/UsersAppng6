import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userList: any = [];


  constructor(private http: HttpClient) {
    console.log('from service', this.userList)
  }

  getUsers() {

    return this.http.get<any>('https://randomuser.me/api/?results=7&seed=a')

  }
}

