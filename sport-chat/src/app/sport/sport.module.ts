import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportBannerComponent } from './sport-banner/sport-banner.component';



@NgModule({
  declarations: [SportBannerComponent],
  imports: [
    CommonModule
  ],
  exports: [SportBannerComponent]
})
export class SportModule { }
