import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCardComponent } from './shared-card/shared-card.component';
import { SharedNavbarComponent } from './shared-navbar/shared-navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SharedCardComponent, SharedNavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SharedCardComponent,
    SharedNavbarComponent,
    // Re Exoprt de Modules
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
