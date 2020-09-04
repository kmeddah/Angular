import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { DispatcherService, COMMANDS } from 'src/app/services/dispatcher.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  constructor(
    public store: DispatcherService
  ) {


    /* this.chatService.userList$.subscribe(
      data => console.table(data)
    ) */

    this.store.dispatch(
      {
        command: COMMANDS.USER_GET_LIST,
        data: null
      }
    )

  }


}
