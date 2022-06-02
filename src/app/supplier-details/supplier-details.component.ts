import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm } from '@angular/forms';
import { ApiServiceService } from '../apiservices.service';
@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
  myform!:FormGroup;
  value:boolean=true;
  object:any =[];
  adduser!:FormGroup;
  alldata:any;
  term!:string;
  flag=0;
  constructor(private fb:FormBuilder,private api:ApiServiceService) {
  }

  ngOnInit(): void {

    this.api.supplier().subscribe(data=>{
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
    this.api.create2(Formvalue).subscribe(data =>{
    console.log(data);
    })

   }
 
  
  deleteuser(data:any,data1:any){
    this.api.clear(data._id,data1._rev).subscribe(res=>{
    location.reload();
    })
       
  }
}
