import { Component, OnInit } from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private userservice: UserService) { }
  username:string;
  password:string;
  ngOnInit() {
  }
  loginuser(e) {
   if(this.username =='admin' && this.password =='admin')
    this.userservice.setUserLoggenIn();
    this.router.navigate(['dashboard']);
  }

}
