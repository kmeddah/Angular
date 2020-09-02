import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';
import { ChatModule } from '../chat/chat.module';
import { ShopModule } from '../shop/shop.module';
import { SportModule } from '../sport/sport.module';
import { SharedModule } from '../shared/shared.module';
import { ScreenHomeComponent } from './screen-home/screen-home.component';
import { ScreenChatComponent } from './screen-chat/screen-chat.component';
import { ScreenShopComponent } from './screen-shop/screen-shop.component';


@NgModule({
  declarations: [ScreenHomeComponent, ScreenChatComponent, ScreenShopComponent],
  imports: [
    CommonModule,
    UserModule,
    ChatModule,
    ShopModule,
    SportModule,
    SharedModule
  ],
  exports: [ScreenHomeComponent, ScreenChatComponent, ScreenShopComponent]
})
export class ScreenModule { }
