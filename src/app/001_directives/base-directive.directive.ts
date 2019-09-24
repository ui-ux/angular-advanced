import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';


@Directive({
  selector: '[appBaseDirective]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})



export class BaseDirectiveDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.element.nativeElement.style.color = 'red';
    const { nativeElement } = this.elementRef;
    this.renderer.setStyle(nativeElement, 'color', 'white');
    this.renderer.addClass(nativeElement, 'background-parent');

/*    this.renderer.setStyle(this.elementRef.nativeElement, "color", "blue");
    this.renderer.addClass(this.elementRef.nativeElement, 'background-parent');*/


    // https://angular.io/api/core/Renderer2

  }

/*  @HostListener("mouseenter", ['$event']) onMouseEnter(event: Event) {
    console.log(event);
  }*/

/*  @HostListener("mouseenter") onMouseEnter() {
    const { nativeElement } = this.elementRef;
    this.renderer.setStyle(nativeElement, 'color', 'red');
  }

  @HostListener("mouseleave") onMouseLeave() {
    const { nativeElement } = this.elementRef;
    this.renderer.setStyle(nativeElement, 'color', 'grey');
  }*/

  @HostBinding ('style.backgroundColor') background: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.background = 'blue';
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.background = 'red';
  }



}



/*import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[bold]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class BoldDirective{

  constructor(private element: ElementRef, private renderer: Renderer2){

    this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
  }

  onMouseEnter(){
    this.setFontWeight("bold");
  }
  onMouseLeave(){
    this.setFontWeight("normal");
  }
  private setFontWeight(val: string) {
    this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
  }
}*/
