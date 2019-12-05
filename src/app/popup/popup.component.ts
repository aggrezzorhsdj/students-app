import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { openCloseAnimation, openCloseShadeAnimation } from './animations';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less'],
  animations: [
    openCloseAnimation,
    openCloseShadeAnimation,
  ]
})
export class PopupComponent implements OnInit {
  @Input() isOpen = false;
  constructor() { }

  ngOnInit() {
  }

}
