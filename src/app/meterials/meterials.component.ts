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
object1:any=[]
constructor(private fb:FormBuilder,private api:ApiServiceService) {
 
}
ngOnInit(): void {
  this.myform = this.fb.group({
    Serial_no:['',Validators.required],
    Pro_ID:['',Validators.required],
    Pro_name:['',Validators.required],
    sup_ID:['',Validators.required],
    sup_name:['',Validators.required],
    quantity:['',Validators.required],
    Cost:['',Validators.required]
  
  
  })
  this.getmeterial();
}
Register(Formvalue:NgForm){
  console.log(Formvalue);
  this.api.create1(Formvalue).subscribe(data =>{
  console.log(data);
  })
  
}
// getmat(){
//   console.log('calling');
  
//   this.api.material().subscribe(data=>{
//     console.log(data);
//     console.log('Data was fetching');
//     this.alldata=data;
//     this.alldata=this.alldata.rows;
//     console.log(this.alldata);
//     console.log('in matteraila');
    
//     for(const i in this.alldata){
//       if(Object.prototype.hasOwnProperty.call(this.alldata,i)){
//         const elt = this.alldata[i];
//         console.log(elt.id);
//         this.api.materialId(elt.id).subscribe(res=>{
//           console.log(res);
//           this.object.push(res);
//           console.log('Fetched successfuly in add component');
//           console.log('products fetched');
          
//         })
//       }

//     }
  
//   })
// }
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
deleteuser(data:any,data1:any){
  this.api.remove(data._id,data1._rev).subscribe(res=>{
    console.log('Your data was Deleted from the database');
  })
     
}

}

