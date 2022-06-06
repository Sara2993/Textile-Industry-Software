import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../apiservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  alldata:any;
  object:any =[];
  constructor(private api:ApiServiceService) { }

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

    this.api.products().subscribe(data1=>{
      console.log(data1);
      console.log('Data was fetching');
      this.alldata=data1;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const i of this.alldata){
        
            this.object.push(i);
            console.log('Fetched successfuly in add component');
        

      }
    
    });
  }

}
