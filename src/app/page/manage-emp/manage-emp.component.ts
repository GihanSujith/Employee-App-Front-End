import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-emp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-emp.component.html',
  styleUrl: './manage-emp.component.css'
})
export class ManageEmpComponent {

  public firstName:string=""

  addEmployee(){
    alert(this.firstName)
  }
}
