import {  Directive,  ElementRef,  HostListener,  Input,  Renderer2} from '@angular/core';

@Directive({
  selector: '[appWaySize]'
})
export class WaySizeDirective {
  @Input('appWaySize') size: string;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.upSize(this.size || '14');
  }
  private upSize(size: string) {
    this.render.setStyle(this.el.nativeElement, 'size', size);
  }
}
