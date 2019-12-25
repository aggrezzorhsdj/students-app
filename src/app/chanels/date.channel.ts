import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'CustomDate' })

/*
* @param date: Date | String | number - Передаваемое значение
* @param format: String - строка форматирования даты
 */
export class CustomDate implements PipeTransform {
  transform(date: Date | string | number, format: string = 'yyyy-MM-dd'): string {
    date = new Date(date)
    return new DatePipe('en-US').transform(date, format);
  }
}
