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
  index: number;
  editForm = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
  }
  @Input()
  set indexElement(index: number) {
    this.index = index ? index : 0;
  }
  @Input()
  setForm(b: boolean) {
    this.editForm = b;
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
  get f() { return this.addForm.controls; }
  public submitForm(e: Event) {
    this.submitted = true;
    console.log(this.submitted);
    e.preventDefault();
    let added: IStudents;
    if (this.addForm.valid) {
      const year: Date = new Date();
      const curDate: Date = new Date(this.addForm.get('userBirthDay').value);
      added = {
        id: this.students.length + 1,
        name: this.addForm.get('userFullName').get('userFirstName').value,
        surname: this.addForm.get('userFullName').get('userLastName').value,
        age: year.getFullYear(),
        avgmark: this.addForm.get('userAvgMark').value,
        groupname: this.addForm.get('userGroupName').value,
        birthday: year.getFullYear() - curDate.getFullYear(),
        flage: false,
      };
      switch (this.editForm) {
        case false:
          this.addStudents(added);
          break;
        case true:
          this.editStudents(added, this.index);
          break;
      }
    }
  }
  public addStudents(students: IStudents): void {
    this.students.push(students);
  }
  public editStudents(students: IStudents, index: number): void {
    this.students[index] = students;
  }
  get userFirstName() {
    return this.addForm.get('userFirstName');
  }
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      userFullName: this.formBuilder.group({
        userFirstName: ['', Validators.required],
        userLastName: ['', Validators.required],
      }, {validator: this.userNameValidator}),
      userGroupName: ['', Validators.required],
      userAvgMark: ['', Validators.required],
      userBirthDay: ['', [Validators.required, this.userBirthDateValidator]],
      userFlage: false,
    });
  }

}
