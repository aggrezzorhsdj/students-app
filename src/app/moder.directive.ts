import {
  Directive,
  Renderer2,
  ElementRef,
  Input,
  OnChanges,
  SimpleChange,
  HostBinding, HostListener
} from '@angular/core';

@Directive({
  selector: '[appModer]',
})
export class ModerDirective implements OnChanges {
  /*
  * Директива для подсветки найденных студентов
  * @property   moder - принимает индекс найденного студента
  * @method     setLight(index: number) - подсвечивает строку index управляющего элемента
   */
  @Input('appModer') moder: number;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  setLight(index: number) {
    if (this.el.nativeElement.rowIndex === index) {
      this.backgroundColor = '#053599';
    } else {
      this.backgroundColor = '';
    }
  }
  constructor(public renderer: Renderer2, public el: ElementRef) { }
  ngOnChanges(changes: {[property: string]: SimpleChange }) {
    this.setLight(this.moder);
  }
}

