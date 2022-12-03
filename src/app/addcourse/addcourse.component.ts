import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {
  constructor(private api:ApiService){}
  title=""
  cdescription=""
  cdate=""
  duration=""
  distributor=""
  venue=""
  readValues=()=>
  {
    let data:any={"title":this.title,"cdescription":this.cdescription,"cdate":this.cdate,"duration":this.duration,"distributor":this.distributor,"venu":this.venue}
    console.log(data)
    this.api.addcourse(data).subscribe(
      (response:any)=>{
        console.log(response)
      }
    )
  }
}
