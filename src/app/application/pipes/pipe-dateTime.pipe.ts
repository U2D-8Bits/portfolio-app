//* Este pipe sirve para convertir una fecha a un formato específico, en este caso, 'Month - year'.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customDate' })
export class CustomDatePipe implements PipeTransform {
  transform(value: Date): string {
    //? Almacenamos la fecha en una variable de tipo Date
    const date: Date = new Date(value);

    //? Extraemos el mes y el año de la fecha
    const monthName: string = date.toLocaleString('default', { month: 'long' });
    const year: number = date.getFullYear();

    //? Formateamos la fecha en el formato deseado
    const formatedDate: string = `${monthName.toLocaleUpperCase()}  ${year}`;

    //? Retornamos la fecha formateada
    return formatedDate;
  }
}
