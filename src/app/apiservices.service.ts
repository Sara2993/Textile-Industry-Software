import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  constructor(private  http:HttpClient) {
   }
   getfunction(){
   return this.http.get('http://localhost:8000/dashboard');
   }
   signup(formObject:any){
   return this.http.post('http://localhost:8000/postquery',formObject);
  }
  getUser(){
    return this.http.get('http://localhost:8000/getUser/');
  }
  getUserId(id:any){
    return this.http.get(`http://localhost:8000/getUserId/${id}`);
  }
  remove(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/delete/${id}/${id1}`);
  }
  create(id:any){
   return this.http.post('http://localhost:8000/create',id);
   
  }
  contact(formobject:any){
    console.log('welcome to my industry');
    
    return this.http.post('http://localhost:8000/mail/',formobject)
}
}