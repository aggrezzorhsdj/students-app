import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { PopupComponent } from './popup/popup.component';
import {PopUpModule} from './popup/popup.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    PopUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
