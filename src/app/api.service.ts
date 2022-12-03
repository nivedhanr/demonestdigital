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
}
