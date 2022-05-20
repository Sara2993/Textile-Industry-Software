import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginform=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

}
