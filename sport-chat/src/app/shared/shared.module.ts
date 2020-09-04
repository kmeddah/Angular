import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCardComponent } from './shared-card/shared-card.component';
import { SharedNavbarComponent } from './shared-navbar/shared-navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MsgPipe } from './msg.pipe';


@NgModule({
  declarations: [SharedCardComponent, SharedNavbarComponent, MsgPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SharedCardComponent,
    SharedNavbarComponent,
    // Re Exoprt de Modules
    CommonModule,
    FormsModule,
    HttpClientModule,
    MsgPipe
  ]
})
export class SharedModule { }
