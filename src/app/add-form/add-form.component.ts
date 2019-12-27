import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators
} from '@angular/forms';
import { STUDENTS } from '../students.list';
import { IStudents } from '../students';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFormComponent implements OnInit, OnChanges {
  constructor(private formBuilder: FormBuilder) {
  }
  private students = STUDENTS;
  addForm = this.formBuilder.group({
      userFullName: this.formBuilder.group({
        userFirstName: ['', Validators.required],
        userLastName: ['', Validators.required],
      }, {validator: this.userNameValidator}),
      userGroupName: ['', Validators.required],
      userAvgMark: ['', Validators.required],
      userBirthDay: ['', [Validators.required, this.userBirthDateValidator]],
    });
  index: number;
  submitted = false;
  @Output() onClick = new EventEmitter();
  @Input() target = '';
  @Input() title: string;
  @Input()
  set indexElement(index: number) {
    this.index = index ? index : 0;
  }
  @Input()
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
    this.submitted = true;
    e.preventDefault();
    let added: IStudents;
    if (this.addForm.valid) {
      const year: Date = new Date();
      const curDate: Date = new Date(this.addForm.get('userBirthDay').value);
      added = {
        id: this.students.length + 1,
        name: this.addForm.get('userFullName').get('userFirstName').value,
        surname: this.addForm.get('userFullName').get('userLastName').value,
        age: year.getFullYear() - curDate.getFullYear(),
        avgmark: this.addForm.get('userAvgMark').value,
        groupname: this.addForm.get('userGroupName').value,
        birthday: curDate.getTime(),
      };
      console.log(this.target);
      switch (this.target) {
        case 'addStudent':
          this.addStudents(added);
          break;
        case 'editStudent':
          console.log(this.index);
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
  ngOnInit() {
  }
  ngOnChanges() {
    if (this.index) {
      this.addForm.get('userFullName').get('userFirstName').setValue(this.students[this.index].name);
      this.addForm.get('userFullName').get('userLastName').setValue(this.students[this.index].surname);
      this.addForm.get('userAvgMark').setValue(this.students[this.index].avgmark);
      this.addForm.get('userGroupName').setValue(this.students[this.index].groupname);
      console.log(this.students[this.index].birthday);
      const currentDate = new Date(this.students[this.index].birthday + (new Date().getTimezoneOffset()*60)).toISOString().substring(0, 10);
      this.addForm.get('userBirthDay').setValue(currentDate);
    }
  }

}
