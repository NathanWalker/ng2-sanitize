import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
  selector: '[sanitize]'
})
export class SanitizeDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementAttribute(el.nativeElement, 'class', 'sample-class');
  }
}
