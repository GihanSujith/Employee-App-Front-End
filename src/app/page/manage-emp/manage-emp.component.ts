import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-emp',
  standalone: true,
  imports: [],
  templateUrl: './manage-emp.component.html',
  styleUrl: './manage-emp.component.css'
})
export class ManageEmpComponent {
  public employeeObj ={
    firstName:"",
    lastName:"",
    email:"",
    departmentId:"",
    roleId:""
  }
}
