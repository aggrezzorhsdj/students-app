import {ChangeDetectionStrategy, Component, EventEmitter, OnInit} from '@angular/core';
import { Input, Output } from '@angular/core';
import { openCloseAnimation, openCloseShadeAnimation } from './animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less'],
  animations: [
    openCloseAnimation,
    openCloseShadeAnimation,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent implements OnInit {
  @Input() isOpen = false;
  constructor() { }

  ngOnInit() {
  }

}
