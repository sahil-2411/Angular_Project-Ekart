import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setbackground]'
})
export class SetBackground implements OnInit{

    //private element: ElementRef;
    
    constructor(private element:ElementRef, private renderer:Renderer2){  /// reference will be passed of the span element
        //this.element=element;


    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // this.element.nativeElement.style.background='#34344F';
        // this.element.nativeElement.style.color='white';

        this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#34344F');
        this.renderer.setStyle(this.element.nativeElement,'color','white');
        //this.renderer.setAttribute(this.element.nativeElement,'title','this is example title');

        
    }
}