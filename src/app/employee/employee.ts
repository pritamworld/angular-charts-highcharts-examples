import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  // @Input({alias: 'e', required: true})emp:any
  @Input()emp:any
  // emp = input()

}
