import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from './users.service';

export interface Joke {
  name: string;
  description: string;
}
@Injectable({
  providedIn: 'root',
})
export class CrimeInfoServiceService {
  private activeCrimeInfoSubject = new BehaviorSubject<User | null>(null);
  activeCrimeInfo$ = this.activeCrimeInfoSubject.asObservable();

  private activeCrimeJokesSubject = new BehaviorSubject<Joke | null>(null);
  activeJokeInfo$ = this.activeCrimeJokesSubject.asObservable();

  activeCrimeInfo(item: User) {
    this.activeCrimeInfoSubject.next(item);
  }
}
