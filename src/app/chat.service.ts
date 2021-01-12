import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  currentChatGrp: any;

  connected = false;
  userId: string;
  email: string;
  login: string;
  constructor(
    private router:Router,
    public firestore: AngularFirestore,
    private afDB :AngularFireDatabase,
    private afAuth :AngularFireAuth,
    ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
      } else {
        console.log('UserId: ' + auth.uid);
        this.connected = true;
        this.userId = auth.uid;
        this.email = auth.email;
      }
    });
    this.firestore.collection("User").snapshotChanges()
    .subscribe(actions => {
      actions.forEach(action => {
        if (action.payload.doc.data()["email"]==this.email){
          this.login= action.payload.doc.data()["login"] ;
                  
          }
      });
    });
  }

  async Go(x){
    this.router.navigate([x]);
  }

  logout(){
    console.log("Logout");
    this.connected = false;
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

}
