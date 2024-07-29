import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHover]'
})
export class AppHoverDirective {

  constructor(private element : ElementRef, private renderer: Renderer2) {

   }

   @HostBinding('style.backgroundColor')backgroundcolor: string='#282828';
   @HostBinding('style.border')border: string='none';
   @HostBinding('style.color')textcolor: string='white ';


   @HostListener('mouseenter')OnmMouseenter(){
     this.backgroundcolor='white';
     this.textcolor='#282828'
     this.border='#282828 2px solid'
   }

   @HostListener('mouseout')OnmMouseout(){
    this.backgroundcolor='#282828';
    this.textcolor='white'
    this.border='none'
  }


}
