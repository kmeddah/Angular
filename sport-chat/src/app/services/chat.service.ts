import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  currentUser: User = null;

  userList$ = new BehaviorSubject<User[]>([]);
  messages$ = new BehaviorSubject<Message[]>([]);

  constructor() { }

  connectUser(
    user: Pick<User, 'username' | 'password'>
  ): Observable<User>/* RXJS */ {

    this.currentUser = Object.assign(user, { id: 1, avatar: '' });
    return of(this.currentUser);
  }

  getUserList(): void {
    this.userList$.next([
      {id:1,username:'Pascal',password:'orsys',avatar:'http://robohash.org/psacal'},
      {id:1,username:'Khaled',password:'orsys',avatar:'http://robohash.org/khaled'},
      {id:1,username:'Mickael',password:'orsys',avatar:'http://robohash.org/mickael'},
      {id:1,username:'Daniel',password:'orsys',avatar:'http://robohash.org/daniel'},
      {id:1,username:'Renaud',password:'orsys',avatar:'http://robohash.org/renaud'}
    ])
  }

  getMessages(): void { }

  sendMessage(author: User, text: string): void { }

  refresh(): void { }
}
