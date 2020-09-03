import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportBannerComponent } from './sport-banner/sport-banner.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SportBannerComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SportBannerComponent]
})
export class SportModule { }
