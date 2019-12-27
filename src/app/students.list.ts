import { IStudents } from './students';

export const STUDENTS: IStudents[] = [
  {
    id: 1,
    name: 'ivan',
    surname: 'petrov',
    age: 15,
    avgmark: 4,
    groupname: '14RT-2',
    birthday: new Date(2002, 11, 5).getTime(),
  },
  {
    id: 2,
    name: 'sergey',
    surname: 'ivanov',
    age: 14,
    avgmark: 5,
    groupname: '14RT-2',
    birthday: new Date(2002, 5, 11).getTime(),
  },
  {
    id: 3,
    name: 'dmitry',
    surname: 'skvorcov',
    age: 14,
    avgmark: 3.3,
    groupname: '14RT-2',
    birthday: new Date(2002, 8, 10).getTime(),
  },
  {
    id: 4,
    name: 'oleg',
    surname: 'pero',
    age: 14,
    avgmark: 3.5,
    groupname: '14RT-2',
    birthday: new Date(2002, 11, 2).getTime(),
  },
  {
    id: 5,
    name: 'vladimir',
    surname: 'mah',
    age: 14,
    avgmark: 4,
    groupname: '14RT-2',
    birthday: new Date(2002, 9, 9).getTime(),
  },
];
