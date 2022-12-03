import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewfriend',
  templateUrl: './viewfriend.component.html',
  styleUrls: ['./viewfriend.component.css']
})
export class ViewfriendComponent {
  loading:boolean=true
  constructor(private api:ApiService){
    api.fetchfriend().subscribe(
        (response)=>{
          this.loading=false
          this.data=response;
        }
      )
  }

  data:any=[]
}
