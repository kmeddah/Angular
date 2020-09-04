import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  currentUser: User = null;

  userList$ = new BehaviorSubject<User[]>([]);
  messages$ = new BehaviorSubject<Message[]>([]);

  constructor(
    private httpClient: HttpClient
  ) {
    setInterval(
      () => this.getMessages(), 1500
    )
   }

  connectUser(
    user: Pick<User, 'username' | 'password'>
  ): Observable<User>/* RXJS */ {

    this.currentUser = Object.assign(user, { id: 1, avatar: '' });
    return of(this.currentUser);
  }

  getUserList(): void {
    this.httpClient
      .get<User[]>(environment.API_USERS)
      .subscribe(
        data => this.userList$.next(data)
      );

  }

  getMessages(): void {
    this.httpClient
    .get<Message[]>(environment.API_MESSAGES)
    .subscribe(
      data => this.messages$.next(data)
    );
  }

  sendMessage(author: User, text: string): void {
    this.httpClient.post(
      environment.API_MESSAGES,
      {
        author,
        text
      }
    ).subscribe(console.warn)
   }

  refresh(): void {
    this.getUserList();
  }
}
