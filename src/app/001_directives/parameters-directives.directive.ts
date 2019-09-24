import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appParametersDirectives]'
})

export class ParametersDirectivesDirective implements OnInit {
  @Input() hoverColor: string = 'green';
  @Input() hoverColorLeave: string = 'blue';
  @Input() defaultColor: string = 'red';
  @HostBinding ('style.backgroundColor') background: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.background = this.defaultColor;
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.background = this.hoverColor;
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.background = this.hoverColorLeave;
  }

}
