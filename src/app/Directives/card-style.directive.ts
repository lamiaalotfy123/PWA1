import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appCardStyle]',
  standalone: true,
})
export class CardStyleDirective {
  //property decorator
  // @Input() colorBorder: string='red';
  // @Input() valueBoxShadow:number= 30;
  // angular ElementRef=> dom doucumnt.geblb
  constructor(private elementRef: ElementRef) {}
  //method decorator
  @HostListener('mouseover') Fun1() {
    // rounded border
    this.elementRef.nativeElement.style.borderRadius = '50px';
    this.elementRef.nativeElement.style.boxShadow =
      '0px 0px 15px rgba(0, 0, 0, 0.5)';
    this.elementRef.nativeElement.style.transition = '0.5s';
  }
  @HostListener('mouseout') Fun2() {
    // original border
    this.elementRef.nativeElement.style.borderRadius = '0px';
    this.elementRef.nativeElement.style.boxShadow = 'none';
    this.elementRef.nativeElement.style.transition = '0.5s';
  }
}
