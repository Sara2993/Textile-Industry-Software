import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';
import { ApiServiceService } from '../apiservices.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  register!:FormGroup;
  value:boolean=true;
  object:any =[];
  adduser!:FormGroup;
  alldata:any;
  constructor(private fb:FormBuilder,private api:ApiServiceService) {
  }
  ngOnInit(): void {
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
    
    });
  }
  
  Register(Formvalue:NgForm){
    console.log(Formvalue);
    window.location.reload();//avoid double clicks
    this.api.signup(Formvalue).subscribe(data =>{
    console.log(data);
    })
    
  }
    
  deleteuser(data:any,data1:any){
    this.api.remove(data._id,data1._rev).subscribe(res=>{
    console.log('Your data was Deleted from the database');
    location.reload();

    })
       
     }
}
