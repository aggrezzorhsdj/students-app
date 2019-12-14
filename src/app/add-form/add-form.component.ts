import {Component, Input, OnInit} from '@angular/core';
import {
  AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn,
  Validators
} from '@angular/forms';
import { STUDENTS } from '../students.list';
import { IStudents } from '../students';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.less']
})
export class AddFormComponent implements OnInit {
  students = STUDENTS;
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.addForm = this.formBuilder.group({
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
