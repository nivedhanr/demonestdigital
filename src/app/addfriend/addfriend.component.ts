import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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
constructor(private api:ApiService){}

readValues=()=>
{
  let data:any={"name":this.name,"fname":this.fname,"dyf":this.dyf,"fnn":this.fnn}
  console.log(data)
  this.api.addfriend(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {
        alert("Successfully added")
        
      } else {
        alert("Something went wrong")
        
      }
    }
  )
}
}
