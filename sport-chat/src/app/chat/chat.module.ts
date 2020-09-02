import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ChatTitleComponent } from './chat-title/chat-title.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatDicussionComponent } from './chat-dicussion/chat-dicussion.component';
import { ChatTopicComponent } from './chat-topic/chat-topic.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ChatComponent, ChatTitleComponent, ChatInputComponent, ChatDicussionComponent, ChatTopicComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ChatComponent, ChatTopicComponent]
})
export class ChatModule { }
