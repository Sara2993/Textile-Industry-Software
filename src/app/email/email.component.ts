import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm,FormBuilder,Validators } from '@angular/forms';
import { ApiServiceService } from '../apiservices.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
  export class EmailComponent implements OnInit {
    addform!: FormGroup;
    value:boolean=true;
    
  store: any;
  constructor(private fb:FormBuilder,private api:ApiServiceService) {
  }
  
    ngOnInit(): void {
      this.addform= this.fb.group({
        
        email_id:['',Validators.required],
        message:['',Validators.required],

      })
    }
    addmessage(formvalue:NgForm){
      console.log('hi');
      console.log(formvalue);
      this.store.push(formvalue)
      this.api.addmessage(formvalue).subscribe(res=>{
       console.log("hello"+res);
       console.log("Your data was posted successfully!");
       // window.location.replace("/query")
       alert('your data is added successfully')
       },rej=>{
       console.log("opps! Can not post data"+rej);
       });
    }
    }