import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
