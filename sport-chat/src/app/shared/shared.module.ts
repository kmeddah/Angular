import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCardComponent } from './shared-card/shared-card.component';
import { SharedNavbarComponent } from './shared-navbar/shared-navbar.component';



@NgModule({
  declarations: [SharedCardComponent, SharedNavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [SharedCardComponent, SharedNavbarComponent]
})
export class SharedModule { }
