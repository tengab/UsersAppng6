import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userList: any = [];


  constructor(private http: HttpClient) {
// this.getUsers()
  }

  getUsers() {
    // console.log('dupa service')
    return this.http.get<any>('https://randomuser.me/api/?results=7&seed=a')

  }
}

