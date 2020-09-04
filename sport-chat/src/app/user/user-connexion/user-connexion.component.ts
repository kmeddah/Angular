import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {User} from '../../services/user';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-user-connexion',
  templateUrl: './user-connexion.component.html',
  styleUrls: ['./user-connexion.component.css']
})
export class UserConnexionComponent implements OnInit {

  public user: Pick<User, 'username' |'password' > = {
    username: 'Name',
    password: 'Password'
  };

  @Output() userConnection = new EventEmitter();

  constructor(
    private chatService:ChatService
  ) { }

  ngOnInit(): void {
  }


  requestConnection() {
    console.log(this.user);
    //Connection OK
    this.chatService
      .connectUser(this.user)
      .subscribe( data => {
        console.table(data);
        this.userConnection.emit(this.user);
      })

  }

}
