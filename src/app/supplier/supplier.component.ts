import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';
import { ApiServiceService } from '../apiservices.service';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})

  export class SupplierComponent implements OnInit {

    myform!:FormGroup;
    value:boolean=true;
    object:any =[];
    adduser!:FormGroup;
    alldata:any;
    term!:string;
    constructor(private fb:FormBuilder,private api:ApiServiceService) {
   
    }
    ngOnInit(): void {
      this.myform = this.fb.group({
        Serial_id:['',Validators.required],
        name:['',Validators.required],
        contact:['',Validators.required],
        email_id:['',Validators.required],
        aadhar:['',Validators.required],
        city:['',Validators.required],
        State:['',Validators.required]
    
    })
    }
    Register(Formvalue:NgForm){
      console.log(Formvalue);
      window.location.reload();
      this.api.create2(Formvalue).subscribe(data =>{
      console.log(data);
      })
      
    }
    getuser(){
      this.api.supplier().subscribe(data=>{
        console.log(data);
        console.log('Data was fetching');
        this.alldata=data;
        this.alldata=this.alldata.rows;
        console.log(this.alldata);
        for(const i in this.alldata){
          if(Object.prototype.hasOwnProperty.call(this.alldata,i)){
            const elt = this.alldata[i];
            console.log(elt.id);
            this.api.supplierId(elt.id).subscribe(res=>{
              console.log(res);
              this.object.push(res);
              console.log('Fetched successfuly in add component');
            })
          }
    
        }
      
      })
    }
    deleteuser(data:any,data1:any){
      this.api.clear(data._id,data1._rev).subscribe(res=>{
        alert('Your data was Deleted from the database');
      })
         
    }
    
    }
    
    