import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../apiservices.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform!:FormGroup;

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
    if(i.first_name ==  formvalue.username && i.password == formvalue.password){
        this.flag = 1;
    }
 }
  if(this.flag == 1 ){
this.router.navigate(['/home']);
  }
  else{
      this.notify = "invalid user..";
  }
}
}
