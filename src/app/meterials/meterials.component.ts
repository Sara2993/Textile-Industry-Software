import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';
import { ApiServiceService } from '../apiservices.service';


@Component({
  selector: 'app-meterials',
  templateUrl: './meterials.component.html',
  styleUrls: ['./meterials.component.css']
})
export class MeterialsComponent implements OnInit {

myform!:FormGroup;
value:boolean=true;
object:any =[];
alldata:any;
term!:string;
object1:any=[];
object2:any=[];
flag=0;
constructor(private fb:FormBuilder,private api:ApiServiceService) {
 
}
ngOnInit(): void {
  this.myform = this.fb.group({
    Serial_no:['',Validators.required],
    Pro_ID:['',Validators.required],
    Pro_type:['',Validators.required],
    Pro_name:['',Validators.required],
    sup_ID:['',Validators.required],
    sup_name:['',Validators.required],
    quantity:['',Validators.required],
    Cost:['',Validators.required]
  
  
  })
  this.getmeterial();
  this.getuser();
}
Register(Formvalue:NgForm){
  console.log(Formvalue);
  window.location.reload();//avoid double click
  this.api.create1(Formvalue).subscribe(data =>{
  console.log(data);
  })
  
}

getmeterial(){
  this.api.meterial().subscribe(data=>{
    console.log(data);
    console.log('Data was fetching');
    this.alldata=data;
    this.alldata=this.alldata.docs;
    console.log(this.alldata);
    for(const i of this.alldata){
      // if(Object.prototype.hasOwnProperty.call(this.alldata,i)){
      //   const elt = this.alldata[i];
      //   console.log(elt.id);
      //   this.api.supplierId(elt.id).subscribe(res=>{
      //     console.log(res);
          this.object1.push(i);
          console.log('Fetched successfuly in add component');
          console.log('Fetched supplier',this.object1);
            // })
      
      // }

    }
  
  });
}
// ------------relation supplier to meterial---------------//
getuser(){
  this.api.supplier().subscribe(data=>{
    console.log(data);
    console.log('Data was fetching');
    this.alldata=data;
    this.alldata=this.alldata.docs;
    console.log(this.alldata);
    for(const i of this.alldata){
      // if(Object.prototype.hasOwnProperty.call(this.alldata,i)){
      //   const elt = this.alldata[i];
      //   console.log(elt.id);
      //   this.api.supplierId(elt.id).subscribe(res=>{
      //     console.log(res);
          this.object2.push(i);
          console.log('Fetched successfuly in add component');
        // })
      // }

    }
  
  });
}
deleteuser(data:any,data1:any){
  this.api.remove(data._id,data1._rev).subscribe(res=>{
    console.log('Your data was Deleted from the database');
  })
     
}
shift(event:any){
  console.log('hello');
  for (const key in this.object2) {
    if (Object.prototype.hasOwnProperty.call(this.object2, key)) {
      const element = this.object2[key];
      console.log(element);
     var value=element.Serial_id;
     console.log(value);
     if(value==event.target.value){
       console.log("working");
       this.myform.controls["sup_name"].setValue(element.name);
     }
    }

  }
}
}

