import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent {
  loading:boolean=true
  constructor(private api:ApiService){
    api.fetchcourse().subscribe(
      (response)=>{
        this.loading=false
        this.data=response;
      }
    )
  }
data:any=[]
}
