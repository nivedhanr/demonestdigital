import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeid=""
  password=""
  constructor(private route:Router){}
  readValues=()=>
  {
    let data:any={"employeeid":this.employeeid,"password":this.password}
    console.log(data)
    if (this.employeeid=="1122" && this.password=="12345") {
      alert("Successfully logined")
      this.employeeid=""
      this.password=""
      this.route.navigate(['/navbar2'])
    } else {
      alert("Invalid employee id or password")
      
    }
  }

}
