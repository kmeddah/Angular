import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ChatTopicComponent } from './chat-topic/chat-topic.component';



@NgModule({
  declarations: [ChatComponent, ChatTopicComponent],
  imports: [
    CommonModule
  ],
  exports: [ChatComponent, ChatTopicComponent]
})
export class ChatModule { }
