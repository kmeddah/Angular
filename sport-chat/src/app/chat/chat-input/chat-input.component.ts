import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {

  public messageText = '';

  constructor(
    private chatService: ChatService
  ) { }

  send() {
    this.chatService.sendMessage(
      this.chatService.currentUser,
      this.messageText
    );

    this.messageText = '';
  }

}
