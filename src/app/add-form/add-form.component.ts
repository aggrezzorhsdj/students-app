import {Component, Input, OnInit} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn,
  Validators } from '@angular/forms';
import { STUDENTS } from '../students.list';
import { IStudents } from '../students';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.less']
})
export class AddFormComponent implements OnInit {
  @Input() isOpen = false;
  addForm: FormGroup;
  students = STUDENTS;
  constructor() {
    this.addForm = new FormGroup({
      userId: new FormControl('6'),
      userFullName: new FormGroup({
        userFirstName: new FormControl('', Validators.required),
        userLastName: new FormControl('', Validators.required),
      }),
      userGroupName: new FormControl('', Validators.required),
      userAge: new FormControl('', Validators.required),
      userAvgMark: new FormControl('', Validators.required),
      userBirthDay: new FormControl(this.currentDate(), Validators.required),
      userFlage: new FormControl('false'),
    });
  }
  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }
  public submitForm(e: Event) {
    e.preventDefault();
    if (this.addForm.valid) {
      const added: IStudents = {
        id: this.addForm.get('userId').value,
        name: this.addForm.get('userFullName').get('userFirstName').value,
        surname: this.addForm.get('userFullName').get('userLastName').value,
        age: this.addForm.get('userAge').value,
        avgmark: this.addForm.get('userAvgMark').value,
        groupname: this.addForm.get('userGroupName').value,
        birthday: this.addForm.get('userBirthDay').value,
        flage: false,
      };
      this.addStudents(added);

    }
  }
  public addStudents(students: IStudents): void {
    this.students.push(students);
  }
  ngOnInit() {
  }

}
