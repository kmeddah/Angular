import { Injectable } from '@angular/core';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {

  public data;

  constructor(
    private chatService: ChatService,
  ) {
    this.data = {
      users$:this.chatService.userList$,
      messages$:this.chatService.messages$,
    }
  }

  public dispatch(request: ViewRequest) {
    switch (request.command) {
      case COMMANDS.USER_GET_LIST:
        this.chatService.getUserList();
        break;
      case COMMANDS.MESSAGE_GET_LIST:
        this.chatService.sendMessage(
          request.data.author,
          request.data.text
        )
        break;
      default:
        break;
    }
  }
}

export enum COMMANDS {
  USER_GET_LIST,
  USER_CONNECT,
  MESSAGE_GET_LIST,
  MESSAGE_SEND
}

export interface ViewRequest {
  command: COMMANDS;
  data: any;
}
