import { Component } from '@angular/core';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent {
name=""
fname=""
dyf=""
fnn=""
readValues=()=>
{
  let data:any={"name":this.name,"fname":this.fname,"dyf":this.dyf,"fnn":this.fnn}
  console.log(data)
}
}
