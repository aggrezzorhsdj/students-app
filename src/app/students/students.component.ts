import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { STUDENTS } from '../students.list';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.less'],
})
export class StudentsComponent implements OnInit {
  students = STUDENTS;
  light = true;
  isExist = true;
  type = true;
  index: number;
  popUpOpen = false;
  toggle(): void {
    this.light = !this.light;
  }
  search(str: string | number, field: string): void {
    this.students.forEach((element, index) => {
      if (element[field] == str) {
        element.flage = true;
      } else {
        element.flage = false;
      }
    });
  }
  remove(index): void {
    this.index = index;
    this.popUpOpen = true;
  }
  sortby(field: string, type?: string): void {
    if (type && type === 'true') {
      this.type = true;
    } else if (type && type === 'false') {
      this.type = false;
    }
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
  formatTime(timestamp): string {
    const t: Date = new Date(timestamp);
    const day = t.getDay();
    const month = t.getMonth();
    const year = t.getFullYear();
    return `${day}/${month}/${year}`;
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
