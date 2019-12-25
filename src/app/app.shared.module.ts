import { NgModule } from '@angular/core';
import { PopUpModule } from './popup/popup.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import {StudentsComponent} from './students/students.component';

// Custom date pipe
import { CustomDate } from './chanels/date.channel';

import { AddFormComponent } from './add-form/add-form.component';

import { ModerDirective } from './moder.directive';

@NgModule({
  declarations: [
    StudentsComponent,
    AddFormComponent,
    ModerDirective,
    CustomDate,
  ],
  imports: [
    PopUpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    StudentsComponent,
    AddFormComponent,
    PopUpModule,
    FormsModule,
    ReactiveFormsModule,
    ModerDirective,
    CustomDate,
  ],
  providers: [],
})
export class AppSharedModule { }
