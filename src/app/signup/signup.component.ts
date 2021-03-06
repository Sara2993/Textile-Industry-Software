import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';
import { ApiServiceService } from '../apiservices.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  register!:FormGroup;
  value:boolean=true;
  object:any =[];
  adduser!:FormGroup;
  alldata:any;

   
  constructor(private fb:FormBuilder,private api:ApiServiceService) {
      this.register = this.fb.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email_id:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
      contact_no:['',Validators.required],

    })
   }

  ngOnInit(): void {
    console.log("ngOnInit")
  
  }
 
  Register(Formvalue:NgForm){
    console.log(Formvalue);
    window.location.reload();//avoid double click
    this.api.signup(Formvalue).subscribe(data =>{
    console.log(data);
    })
    
  }
  getuser(){
    this.api.getUser().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const i of this.alldata){
       
            this.object.push(i);
            console.log('Fetched successfuly in add component');
         

      }
    
    })
  }
  deleteuser(data:any,data1:any){
    this.api.remove(data._id,data1._rev).subscribe(_res=>{
      console.log('Your data was Deleted from the database');
    })
       
     }
     
  }


