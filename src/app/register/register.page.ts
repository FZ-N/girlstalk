import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
  constructor(private router:Router, public ngFireAuth: AngularFireAuth,public firestore: AngularFirestore,private afAuth :AngularFireAuth) {  this.afAuth.authState.subscribe(auth => {
    if (!auth) {
      console.log('non connecté');
    } else {
      console.log('UserId: ' + auth.uid);
      this.connected = true;
      this.userId = auth.uid;
    }
  }); }

  ngOnInit() {
  }
  async Register(){

    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email,this.user.password)
    console.log(user);
    this.firestore.collection('User').add({
      email: this.user.email,
      login: await this.user.login,
    });
    if(user.user.email){
      alert('Registered successfully !');
      this.router.navigate(['/login']);
    }else{
      alert('Registered failed !');
    }
  }
}
