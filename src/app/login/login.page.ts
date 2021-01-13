import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { __await } from 'tslib';
import{ ChatService } from '../chat.service';
import{ UserService } from '../user.service';
import{ AdminService } from '../admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email :'',
    password:''
  }
  private blocked:string;
  constructor(private  service:ChatService,private serviceuser:UserService,private admin:AdminService,private router:Router, public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async logMeIn(){
    //this.router.navigate(['/home']);
    const user = await this.ngFireAuth.signInWithEmailAndPassword(this.user.email,this.user.password)
    console.log(user);
    if(user.user.email){
      this.serviceuser.onlineUser(user.user.email);
      console.log(this.user.email);
      this.router.navigate(['/home']);
    }else{
      alert('login failed !');
    }
  }

}
