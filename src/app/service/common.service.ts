import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url ='http://localhost:3000/'

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get(this.url+'comments')
  }
  post(data:any){
    return this.http.post(this.url+'comments', data)
  }
}
