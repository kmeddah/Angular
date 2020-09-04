import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  public messageText = '';

  @ViewChild('btn') sendButton: ElementRef;

  //1
  constructor(
    private chatService: ChatService
  ) { }

  //2
  ngOnInit(): void { }

  ngAfterViewInit() {
    this.sendButton.nativeElement.addEventListener('click', () => this.send());
  }

  //3
  ngOnDoCheck(): void { }

  //4
  ngOnDestroy(): void { }

  send() {
    this.chatService.sendMessage(
      this.chatService.currentUser,
      this.messageText
    );

    this.messageText = '';
  }

}
