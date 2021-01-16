import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';  
import { map, take } from 'rxjs/operators';  

export interface User {  
  login: string;  
  email: string;  
  online: string;  
}  

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentChatindiv: any;

  connected = false;
  userId: string;
  email: string;
  login: string;
  onlineid: string;
  online: string;
  private users: Observable<User[]>;  
  private userCollection: AngularFirestoreCollection<User>;  
  onlineusers = [];

  constructor(
    private router:Router,
    public firestore: AngularFirestore,
    private afDB :AngularFireDatabase,
    private afAuth :AngularFireAuth,
    ) {
    this.userCollection = this.firestore.collection<User>('User');   
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
    this.getOnlineUsers();
  }

  async Go(x){
    this.router.navigate([x]);
  }

  logout(){
    console.log("Logout");
    this.connected = false;
    this.offlineUser(this.email);
    this.login ="";
    this.email ="";
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
   
  }

  onlineUser(mail){  
    this.firestore.collection("User").snapshotChanges()
    .subscribe(actions => {
      actions.forEach(action => {
        if (action.payload.doc.data()["email"]==mail){
          this.onlineid= action.payload.doc.id ;
          }
      });
    });

    if(this.onlineid){
    this.updateUser("yes");
   }
   this.online ="yes";
  } 

  offlineUser(mail){  
    this.firestore.collection("User").snapshotChanges()
    .subscribe(actions => {
      actions.forEach(action => {
        if (action.payload.doc.data()["email"]==mail){
          this.onlineid= action.payload.doc.id ;
          }
 
      });
    });
  
    this.updateUser("no");
    this.online ="no";
  } 

  updateUser(status): Promise<void> {  
    return this.userCollection.doc(this.onlineid).update({ online: status});  
  } 


  getOnlineUsers() {
    
    this.firestore.collection("User").snapshotChanges()
    .subscribe(actions => {
      this.onlineusers = [];
      actions.forEach(action => {
        if(action.payload.doc.data()["online"] == "yes" && action.payload.doc.data()["login"] != this.login){
          console.log("one");
        this.onlineusers.push({
          login :action.payload.doc.data()["login"],
          mail:  action.payload.doc.data()["email"],
        });}
      });
    });
     
  }

}
