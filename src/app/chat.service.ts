import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  connected = false;

  constructor(private router:Router,private afAuth :AngularFireAuth) {}

  async Go(){
    this.router.navigate(['/chat']);
  }

  logout(){
    console.log("Logout");
    this.connected = false;
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
