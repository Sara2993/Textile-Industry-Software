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

  constructor(private fb:FormBuilder,private api:ApiServiceService) {
    this.register = this.fb.group({
    Serial_no:['',Validators.required],
    date:['',Validators.required],
    item_name:['',Validators.required],
    quantity:['',Validators.required]

  })
  }
  ngOnInit(): void {
  }
  Register(Formvalue:NgForm){
    console.log(Formvalue);
    this.api.create(Formvalue).subscribe(data =>{
    console.log(data);
    })
    
  }
  getuser(){
    this.api.getUser().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.rows;
      console.log(this.alldata);
      for(const i in this.alldata){
        if(Object.prototype.hasOwnProperty.call(this.alldata,i)){
          const elt = this.alldata[i];
          console.log(elt.id);
          this.api.getUserId(elt.id).subscribe(res=>{
            console.log(res);
            this.object.push(res);
            console.log('Fetched successfuly in add component');
          })
        }

      }
    
    })
  }
  deleteuser(data:any,data1:any){
    this.api.remove(data._id,data1._rev).subscribe(res=>{
      console.log('Your data was Deleted from the database');
    })
       
  }
}
