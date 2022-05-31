import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  constructor(private  http:HttpClient) {
   }
   logindata(id: any) {
      return this.http.get(`http://localhost:8000/get_all_query/${id}`);
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
   return this.http.post('http://localhost:8000/createsto',id);
   
  }
  create1(id:any){
    return this.http.post('http://localhost:8000/createmat',id);
    
   }
   create2(id:any){
    return this.http.post('http://localhost:8000/createsup',id);
    
   }
  contact(formobject:any){
    console.log('Haii!!..Grasim Industries Ltd..My  cotton thread is running out of stock so send me the availablestock');
    
    return this.http.post('http://localhost:8000/mail/',formobject)
}
 getdata(id: any) {
  return this.http.get(`http://localhost:8000/get_all_query/${id}`);
}
Register(formObject:any){
  return this.http.post('http://localhost:8000/addquery',formObject);

}
products(){
  return this.http.get('http://localhost:8000/getsto/');

}
meterial(){
  // console.log('hello');
  
  return this.http.get('http://localhost:8000/meterial/');
}
materialId(id:any){
  return this.http.get(`http://localhost:8000/materialId/${id}`);
}
delete(id:any,id1:any){
  return this.http.delete(`http://localhost:8000/delete/${id}/${id1}`);
}
supplier(){
  return this.http.get('http://localhost:8000/getsup');
}
supplierId(id:any){
  return this.http.get(`http://localhost:8000/subqueryID/${id}`);
}
clear(id:any,id1:any){
  return this.http.delete(`http://localhost:8000/clear/${id}/${id1}`);
}
}