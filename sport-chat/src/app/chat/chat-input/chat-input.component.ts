import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  userText: string = "";

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.chatService.sendMessage(this.chatService.currentUser, this.userText);
  }

}
