import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ChatTitleComponent } from '../chat-title/chat-title.component';
import { ChatInputComponent } from '../chat-input/chat-input.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChatComponent {

  @ViewChild(ChatInputComponent) input:ChatInputComponent;

  constructor(
  ) { }

  ngAfterViewInit(): void {
    this.input.messageText = 'From The Parent Component'
  }

}
