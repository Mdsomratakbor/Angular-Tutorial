import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse entered!');
  }
}
