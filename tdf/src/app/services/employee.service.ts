import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employee = [
    {name:"Ram", age:34},
    {name:"Shyaml", age:33},
    {name:"Rhit", age:24},
    {name:"John", age:44},
  ]
}
