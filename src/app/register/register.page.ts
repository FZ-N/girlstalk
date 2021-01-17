import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{ UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { __await } from 'tslib';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {
    email :'',
    password:'',
    login:''
  }
 
  userId: string;
  connected = false;

  constructor( private  service:UserService,private router:Router, public ngFireAuth: AngularFireAuth,public firestore: AngularFirestore,private afAuth :AngularFireAuth) {  this.afAuth.authState.subscribe(auth => {
    if (!auth) {
      console.log('non connecté');
    } else {
      console.log('UserId: ' + auth.uid);
      this.connected = true;
      this.userId = auth.uid;
    }
  });
  this.service.checkLogin(); }

  ngOnInit() {
  }


  async Register(){
  
    
    console.log(this.service.logins);
    

      if (!this.service.logins.includes(this.user.login)){
        
     const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email,this.user.password)
      console.log(user);
      this.firestore.collection('User').add({
        email: this.user.email,
        login: await this.user.login,
        online: "no",
        blocked: "no"
      });
      if(user.user.email){
        alert('Registered successfully !');
        this.router.navigate(['/login']);
        
      }
      else{
        alert('Registered failed !');
      }
    }
    else {
      alert('Login already exist, chose another one !');
    }

  }
}