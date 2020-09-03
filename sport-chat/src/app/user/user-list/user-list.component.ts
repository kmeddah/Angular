import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  constructor(
    public chatService:ChatService
  ) {


    // this.chatService.userList$.subscribe(
    //   data => console.table(data)
    // )
  }


}
