import { Component, OnInit } from '@angular/core';
import { IStudents } from '../students';
import { STUDENTS } from '../students.list';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = STUDENTS;
  constructor() { }

  ngOnInit() {
  }

}
