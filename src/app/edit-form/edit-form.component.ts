import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IStudents} from '../students';
import {STUDENTS} from '../students.list';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  students = STUDENTS;
  index: number;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.editForm = this.formBuilder.group({
      userId: '6',
      userFullName: this.formBuilder.group({
        userFirstName: ['', Validators.required],
        userLastName: ['', Validators.required],
      }, {validator: this.userNameValidator}),
      userGroupName: ['', Validators.required],
      userAge: ['', Validators.required],
      userAvgMark: ['', Validators.required],
      userBirthDay: ['', [Validators.required, this.userBirthDateValidator]],
      userFlage: false,
    });
  }
  @Input()
  set indexElement(index: number) {
    this.index = index ? index : 0;
  }
  public userNameValidator(group: FormGroup) {
    const userFirstName = group.controls.userFirstName.value;
    const userLastName = group.controls.userLastName.value;

    if (userFirstName === userLastName) {
      return {
        notEqual: 'First name and last name must be not equal'
      };
    } else {
      return null;
    }
  }
  public userBirthDateValidator(control: FormControl) {
    const currDate = new Date();
    const birthDate = new Date(control.value);
    if (birthDate.getFullYear() > (currDate.getFullYear() - 10)) {
      return {
        errorBirthDay: 'Year of birthday must be less 10 years'
      };
    } else {
      return null;
    }
  }
  public currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10);
  }
  public setStudentIndex(index: number): void {
    this.index = index;
  }
  public submitForm(e: Event) {
    console.log(this.index);
    e.preventDefault();
    if (this.editForm.valid) {
      const added: IStudents = {
        id: this.editForm.get('userId').value,
        name: this.editForm.get('userFullName').get('userFirstName').value,
        surname: this.editForm.get('userFullName').get('userLastName').value,
        age: this.editForm.get('userAge').value,
        avgmark: this.editForm.get('userAvgMark').value,
        groupname: this.editForm.get('userGroupName').value,
        birthday: this.editForm.get('userBirthDay').value,
        flage: false,
      };
      this.editStudents(added, this.index);

    }
  }
  public editStudents(students: IStudents, index: number): void {
    this.students[index] = students;
  }
  ngOnInit() {
  }

}
