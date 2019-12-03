import {EventEmitter} from '@angular/core';

export class ModalService {
  private clickCnt = 0;
  onClick: EventEmitter<number> = new EventEmitter();

  public doClick() {
    this.clickCnt++;
    this.onClick.emit(this.clickCnt);
  }

}
