import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';
import { ApiServiceService } from '../apiservices.service';

@Component({
  selector: 'app-prodouts',
  templateUrl: './prodouts.component.html',
  styleUrls: ['./prodouts.component.css']
})
export class ProdoutsComponent implements OnInit {
  register!:FormGroup;
  value:boolean=true;
  object:any =[];
  adduser!:FormGroup;
  alldata:any;
  term!:string;
  constructor(private fb:FormBuilder,private api:ApiServiceService) {
    this.register = this.fb.group({
    Serial_no:['',Validators.required],
    date:['',Validators.required],
    item_name:['',Validators.required],
    quantity:['',Validators.required]

  })
  }
  ngOnInit(): void {
    console.log("ngOnInit")
  }
  Register(Formvalue:NgForm){
    console.log(Formvalue);
    this.api.create(Formvalue).subscribe(data =>{
    console.log(data);
    })
    window.location.reload();//avoid double click
  }
  getproducts(){


    this.api.products().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const i of this.alldata){
        console.log('i',i.quantity);
     
        console.log('i',i.item_name);
        if(i.quantity < 20)
        {
          const object={
            message : `${i.item_name}` + 'is a Low stock available in Industry please update' + `${i.quantity}`,
            email:'anishamani9095@gmail.com'
          }
         
          console.log("Product details",i.quantity);
          this.api.contact(object).subscribe(res=>{
            console.log("hello"+res);
            console.log("Your data was posted successfully!");
        })
    
            this.object.push(i);
            console.log('Fetched successfuly in add component');
      

      }
      }
    });
  }
  deleteuser(data:any,data1:any){
    this.api.remove(data._id,data1._rev).subscribe(_res=>{
      console.log('Your data was Deleted from the database');
    })
       
  }
 
  }

