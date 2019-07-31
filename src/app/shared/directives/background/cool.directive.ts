import {
  Directive,
  HostBinding,
  HostListener } from '@angular/core';

@Directive({
  selector: '[appCool]'
})
export class CoolDirective {
  constructor() { }
  @HostBinding('style.background-color') color: string;
  @HostListener('mouseenter') newColor() {
    this.color = 'lightskyblue';
  }
  @HostListener('mouseleave') oldColor() {
    this.color = '';
  }
}
