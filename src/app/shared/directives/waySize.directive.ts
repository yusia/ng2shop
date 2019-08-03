import {  Directive,  ElementRef,  HostListener,  Input,  Renderer2} from '@angular/core';

@Directive({
  selector: '[appWaySize]'
})
export class WaySizeDirective {
  @Input('appWaySize') size: string;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.upSize(this.size || '30');
  }

  private upSize(size: string): void {
    this.render.setStyle(this.el.nativeElement, 'font-size', size + 'px');
    this.render.setStyle(this.el.nativeElement, 'border', ' 4px double black');
  }
}
