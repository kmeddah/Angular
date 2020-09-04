import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-dicussion',
  templateUrl: './chat-dicussion.component.html',
  styleUrls: ['./chat-dicussion.component.css']
})
export class ChatDicussionComponent implements OnInit {

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
  }

}
