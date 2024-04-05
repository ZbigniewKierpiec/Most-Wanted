import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface User {
  name: string;
  gender: string;
  date:string;
  sub: string;
  active:number;
  image:string;
  jokeName:string;
  jokeDescriptions:string;
}
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private activeCrimeInfoSubject = new BehaviorSubject<boolean>(false);
  activeCrimeInfo$ = this.activeCrimeInfoSubject.asObservable();
  users: User[] = [
    // {
    //   name: 'John Doe',
    //   gender: 'male',
    //   sub: 'yearly',
    //   active: 'no active',
    //   image:'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1533'
    // },
  ];

  getUsers() {
    return this.users;
  }


    toggleActiveCrimeInfo() {
      this.activeCrimeInfoSubject.next(!this.activeCrimeInfoSubject.value);
    }


  addUser(name: string, gender: string,date:string , sub: string, active: number , image:string , jokeName:string , jokeDescriptions:string ) {
    let User = {
      name: name,
      gender:gender,
      date:date,
      sub:sub,
      active:active,
      image:image,
      jokeName:jokeName,
      jokeDescriptions:jokeDescriptions
    };

    this.users.push(User)
  }

  constructor() {}
}
