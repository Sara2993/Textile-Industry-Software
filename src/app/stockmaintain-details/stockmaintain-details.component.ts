import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm } from '@angular/forms';
import { ApiServiceService } from '../apiservices.service';

@Component({
  selector: 'app-stockmaintain-details',
  templateUrl: './stockmaintain-details.component.html',
  styleUrls: ['./stockmaintain-details.component.css']
})
export class StockmaintainDetailsComponent implements OnInit {
  register!:FormGroup;
  value:boolean=true;
  object:any =[];
  adduser!:FormGroup;
  alldata:any;
  term!:string;
  constructor(private fb:FormBuilder,private api:ApiServiceService) {

  }
  ngOnInit(): void {
    
    this.api.products().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const i of this.alldata){
        
            this.object.push(i);
            console.log('Fetched successfuly in add component');
        
      }
    
    });
  }
  Register(Formvalue:NgForm){
    console.log(Formvalue);
    window.location.reload();//avoid double click
    this.api.create(Formvalue).subscribe(data =>{
    console.log(data);
    })
  }
    
  
  deleteuser(data:any,data1:any){
    this.api.remove(data._id,data1._rev).subscribe(_res=>{
      console.log('Your data was Deleted from the database');
      location.reload();
    })
       
  }

  }
