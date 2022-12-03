import { Component } from '@angular/core';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {
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
  }
}
