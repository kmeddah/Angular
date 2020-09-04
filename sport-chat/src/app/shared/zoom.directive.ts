import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  @HostBinding("style.transform") transform = 'scale(1)';

  constructor() { }

  @HostListener('mouseenter')
  zoomIn() {
    this.transform = 'scale(2)';
  }

  @HostListener('mouseleave')
  zoomOut() {
    this.transform = 'scale(1)';
  }

}
