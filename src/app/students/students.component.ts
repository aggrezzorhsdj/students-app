import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { STUDENTS } from '../students.list';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students = STUDENTS;
  light = true;
  type = true;
  index: number;
  popUpOpen = false;
  toggle(): void {
    this.light = !this.light;
  }
  remove(index): void {
    this.index = index;
    this.popUpOpen = true;
  }
  sortby(field): void {
    this.students.sort((a, b): number => {
      if (this.type) {
        if (a[field] > b[field]) {
          return 1;
        }
        if (a[field] < b[field]) {
          return -1;
        }
        return 0;
      } else {
        if (a[field] > b[field]) {
          return -1;
        }
        if (a[field] < b[field]) {
          return 1;
        }
        return 0;
      }
    });
    this.type = !this.type;
  }

  openPopUp() {
    this.popUpOpen = true;
  }
  deleteOption() {
    this.students.splice(this.index, 1);
    this.popUpOpen = false;
  }

  cancelOption() {
    this.popUpOpen = false;
  }
  constructor() {}

  ngOnInit() {
  }

}
