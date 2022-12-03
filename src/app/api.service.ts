import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addcourse=(datatosend:any)=>
  {
    return this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourse",datatosend)
  }
  addfriend=(datatosend:any)=>
  {
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",datatosend)
  }
  fetchcourse=()=>{
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  fetchfriend=()=>{
    return this.http.get("https://dummyapifriends.herokuapp.com/view")

  }
}
