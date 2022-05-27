import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm,FormBuilder,Validators } from '@angular/forms';
import { ApiServiceService } from '../apiservices.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
  export class EmailComponent implements OnInit {
    contact!: FormGroup;
    value:boolean=true;
  constructor(private fb:FormBuilder,private api:ApiServiceService) {
  }
  
    ngOnInit(): void {
      this.contact= this.fb.group({
        
        email_id:['',Validators.required],
        message:['',Validators.required],

      })
    }
    send(Formvalue:NgForm){
      console.log("Hai!!");
      console.log(Formvalue);
      this.api.contact(Formvalue).subscribe((data)=>{
        console.log(Formvalue);
        
      })
    }
    
}
