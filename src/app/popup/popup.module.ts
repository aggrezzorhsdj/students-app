import { NgModule } from '@angular/core';

import { PopupComponent } from './popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [PopupComponent],
  imports: [
    BrowserAnimationsModule,
  ],
  exports: [PopupComponent]
})
export class PopUpModule {}
