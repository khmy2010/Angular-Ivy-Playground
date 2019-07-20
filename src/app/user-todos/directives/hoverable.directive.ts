import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[hoverable]'
})
export class HoverableDirective {
  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    this.el.nativeElement.classList.add('pointer', 'has-text-info');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.classList.replace('has-text-info', 'has-text-link');
  }

  @HostListener('mouseleave') onmouseLeave() {
    this.el.nativeElement.classList.replace('has-text-link', 'has-text-info');
  }
}