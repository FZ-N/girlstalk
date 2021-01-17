import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';  
import { map, take } from 'rxjs/operators';  
import{ UserService } from './user.service';

export interface User {  
  login: string;  
  email: string;  
  online: string;  
  blocked:string
}  

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  connected = false;
  userId: string;
  res: string;
  email: string;
  login: string;
  onlineid: string;
  online: string;
  private users: Observable<User[]>;  
  private userCollection: AngularFirestoreCollection<User>;  
  allusers = [];

  constructor(
    private router:Router,
    public firestore: AngularFirestore,
    private afDB :AngularFireDatabase,
    private afAuth :AngularFireAuth,
    private  service:UserService
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
    this.getUsers();
  }

  async Go(x){
    this.router.navigate([x]);
  }



  blockUser(mail){  
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
  } 

  unblockUser(mail){  
    this.firestore.collection("User").snapshotChanges()
    .subscribe(actions => {
      actions.forEach(action => {
        if (action.payload.doc.data()["email"]==mail){
          this.onlineid= action.payload.doc.id ;
          }
 
      });
    });
  
    this.updateUser("no");
  } 

  updateUser(status): Promise<void> {  
    return this.userCollection.doc(this.onlineid).update({ blocked : status});  
  } 


  getUsers() {
    
    this.firestore.collection("User").snapshotChanges()
    .subscribe(actions => {
      this.allusers = [];
      actions.forEach(action => {
        if( action.payload.doc.data()["login"] != this.login){
        this.allusers.push({
          login :action.payload.doc.data()["login"],
          mail:  action.payload.doc.data()["email"],
          blocked :action.payload.doc.data()["blocked"] 
        });}
      });
    });
     
  }

  logout(){
    this.service.logout();
  }



}
