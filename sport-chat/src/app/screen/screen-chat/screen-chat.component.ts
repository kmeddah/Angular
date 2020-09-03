import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-screen-chat',
  templateUrl: './screen-chat.component.html',
  styleUrls: ['./screen-chat.component.css']
})
export class ScreenChatComponent {

constructor(
  private chatService:ChatService
) {
  this.chatService.getUserList();
}

}
