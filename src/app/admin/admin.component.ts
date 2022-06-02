import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup,Validators, } from '@angular/forms';
import { ApiServiceService } from '../apiservices.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private  http:HttpClient,private formbuilder:FormBuilder, private router:Router,private api:ApiServiceService) { 
  }
  loginForm!:FormGroup;

alldata :any;
flag = 0;
notify= '';
object:any=[];
  ngOnInit(): void {
    this.api.getUser().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.rows;
      console.log(this.alldata);
      for(const i in this.alldata){
          const elt = this.alldata[i];
          console.log(elt.id);
          this.api.getUserId(elt.id).subscribe(res=>{
            console.log(res);
            this.object.push(res);
            console.log('Fetched successfuly');
          })
      }
    });
    this.loginForm = this.formbuilder.group(
      {
        'username':['',Validators.required],
        'password':['',Validators.required],

      }
    );
  }

 alogin(formvalue:any){
  for(const i  of this.object){
    if(i.username ==  formvalue.username && i.password == formvalue.password){
        this.flag = 1;
    }
 }
}
}
