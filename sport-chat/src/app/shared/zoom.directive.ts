import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {


  @Input() appZoom = 1.5;

  @HostBinding('style.transition') transition = 'transform ease 0.3s';
  @HostBinding('style.transform') transform = 'scale(1)';

  constructor() { }

  @HostListener('mouseenter')
  zoomIn() {
    this.transform = 'scale(' + this.appZoom + ')';
  }

  @HostListener('window:keydown.space')
  @HostListener('mouseleave')
  zoomOut() {
    this.transform = 'scale(1)';
  }

}
