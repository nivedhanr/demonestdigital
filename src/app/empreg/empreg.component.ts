import { Component } from '@angular/core';

@Component({
  selector: 'app-empreg',
  templateUrl: './empreg.component.html',
  styleUrls: ['./empreg.component.css']
})
export class EmpregComponent {
  employeeid=""
  fname=""
  lname=""
  houseno=""
  hname=""
  streetname=""
  pin=""
  district=""
  state=""
  country=""
  mobilenumber=""

  emailid=""

  pname=""

  gender=""

  hdegree=""

  yoe=""

  doj=""

  username=""

  password=""

  cpassword=""

readValues=()=>
{
  let data:any={"employeeid":this.employeeid,
  "fname":this.fname,
  "lname":this.lname,
  "houseno":this.houseno,
  "hname":this.hname,
  "streetname":this.streetname,
  "pin":this.pin,
  "district":this.district,
  "state":this.state,
  "country":this.country,
  "mobilenumber":this.mobilenumber,
  "emailid":this.emailid,
  "pname":this.pname,
  "gender":this.gender,
  "hdegree":this.hdegree,
  "yoe":this.yoe,
  "doj":this.doj,
  "username":this.username,
  "password":this.password,
  "cpassword":this.cpassword}
  console.log(data)
  if (this.password==this.cpassword) {
    alert("successfully registered")
    
  } else {
    alert("check password and confirm password")
  }
}

}
