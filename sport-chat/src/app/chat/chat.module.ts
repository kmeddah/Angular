import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ChatTopicComponent } from './chat-topic/chat-topic.component';
import { ChatTitleComponent } from './chat-title/chat-title.component';
import { ChatDiscussionComponent } from './chat-discussion/chat-discussion.component';
import { ChatInputComponent } from './chat-input/chat-input.component';



@NgModule({
  declarations: [ChatComponent, ChatTopicComponent, ChatTitleComponent, ChatDiscussionComponent, ChatInputComponent],
  imports: [
    CommonModule
  ],
  exports: [ChatComponent, ChatTopicComponent]
})
export class ChatModule { }
