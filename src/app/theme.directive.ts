import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[dt-Theme]'
})
export class ThemeDirective implements OnChanges {
  @Input('dt-Theme') theme: {[prop: string]: string};

  constructor(private el: ElementRef<HTMLElement>) {
  }

  ngOnChanges() {
    Object.keys(this.theme).forEach(prop => {
      this.el.nativeElement.style.setProperty(`--${prop}`, this.theme[prop]);
    });
  }
}