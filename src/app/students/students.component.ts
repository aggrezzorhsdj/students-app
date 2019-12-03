import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../students.list';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = STUDENTS;
  light = true;
  type = true;
  index: number;
  clickCnt = 0;
  toggle(): void {
    this.light = !this.light;
  }
  remove(index): void {
    this.students.splice(this.index, 1);
  }
  sortby(field): void {
    this.students.sort((a, b): number => {
      const fieldA = typeof a[field] === 'string' ? a[field].length : a[field];
      const fieldB = typeof b[field] === 'string' ? b[field].length : a[field];
      if (this.type) {
        return fieldA - fieldB;
      } else {
        return fieldB - fieldA;
      }
    });
    this.type = !this.type;
  }
  constructor() {}

  ngOnInit() {
  }

}
