import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  currentUser: User = null;

  userList$ = new BehaviorSubject<User[]>([]);
  messages$ = new BehaviorSubject<Message[]>([]);

  constructor(
    private httpClient: HttpClient
  ) { }

  connectUser(
    user: Pick<User, 'username' | 'password'>
  ): Observable<User>/* RXJS */ {

    this.currentUser = Object.assign(user, { id: 1, avatar: '' });
    return of(this.currentUser);
  }

  getUserList(): void {
    this.httpClient.get<User[]>('http://localhost:5050/users').subscribe(
      data => this.userList$.next(data)
    );
  }

  getMessages(): void { }

  sendMessage(author: User, text: string): void { }

  refresh(): void { }
}
