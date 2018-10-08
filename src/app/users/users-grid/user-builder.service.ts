import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {CountriesService} from "../countries.service";
import {IUser} from "../iuser";

@Injectable({
  providedIn: 'root'
})
export class UserBuilderService {

  user: IUser

  constructor(public countries: CountriesService) {
  }

  mapUser(backendUser) {

    this.user = {
      gender: backendUser.gender,
      name: {
        title: _.startCase(backendUser.name.title),
        first: _.startCase(backendUser.name.first),
        last: _.startCase(backendUser.name.last)
      },
      location: {
        street: _.startCase(backendUser.location.street),
        city: _.startCase(backendUser.location.city),
        state: _.startCase(backendUser.location.state),
        postcode: backendUser.location.postcode,
        coordinates: {
          latitude: backendUser.location.coordinates.latitude,
          longitude: backendUser.location.coordinates.longitude
        },
        timezone: {
          offset: backendUser.location.timezone.offset,
          description: backendUser.location.timezone.description
        }
      },
      email: backendUser.email,
      login: {
        uuid: backendUser.login.uuid,
        username: backendUser.login.username,
        password: backendUser.login.password,
        salt: backendUser.login.salt,
        md5: backendUser.login.md5,
        sha1: backendUser.login.sha1,
        sha256: backendUser.login.sha256
      },
      dob: {
        date: backendUser.dob.date,
        age: backendUser.dob.age
      },
      registered: {
        date: backendUser.registered.date,
        age: backendUser.registered.age
      },
      phone: backendUser.phone,
      cell: backendUser.cell,
      id: {
        name: backendUser.id.name,
        value: backendUser.id.value
      },
      picture: {
        large: backendUser.picture.large,
        medium: backendUser.picture.medium,
        thumbnail: backendUser.picture.thumbnail
      },
      nat: backendUser.nat,
      natFullName: this.countries.getCountryFullName(backendUser.nat)
    }

    return this.user

  }
}
