import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenHomeComponent } from './screen/screen-home/screen-home.component';
import { ScreenChatComponent } from './screen/screen-chat/screen-chat.component';
import { ScreenShopComponent } from './screen/screen-shop/screen-shop.component';

import { ChatGuard } from './services/chat.guard';

const routes: Routes = [
  {
    path:'home',
    component:ScreenHomeComponent
  },
  {
    path:'chat',
    component:ScreenChatComponent,
    canActivate:[ChatGuard]
  },
  {
    path:'shop',
    component:ScreenShopComponent,
    canActivate:[ChatGuard]
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
