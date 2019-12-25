import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppSharedModule } from './app.shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
