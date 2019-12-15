import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { PopupComponent } from './popup/popup.component';
import {PopUpModule} from './popup/popup.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddFormComponent,
  ],
  imports: [
    BrowserModule,
    PopUpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
