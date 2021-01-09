import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  connected = false;
  userId: string;
  email: string;
  messageText: any;
  login: string;
  messages = [];
  //userId: any;
  //get user() {
    //return {
      //  _id: firebase.auth().currentUser.uid, // Problem is here. Make sure user is logged in before doing this.
      //  name: "User",
    //};
  //}
  

  constructor(
    public firestore: AngularFirestore,
    private router:Router,
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
        this.getMessages();
      }
    });
  }

  ngOnInit() {
  }
  async GoHome(){
    this.router.navigate(['/home']);
  }

  logout(){
    console.log("Logout");
    this.connected = false;
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
  getLogin() {

    this.firestore.collection("User").snapshotChanges()
    .subscribe(actions => {
      actions.forEach(action => {
        if (action.payload.doc.data()["email"]==this.email){
          this.login= action.payload.doc.data()["login"] ;
                  
          }
      });
    });
     
  }
  sendMessage(){
    this.getLogin();
    console.log('messageText :' + this.login)
    console.log('messageText :' + this.messageText)
    this.firestore.collection('Message').add({
      userId: this.userId,
      login: this.login,
      text: this.messageText,
      date: new Date().toISOString()
    });
    this.messageText='';
  }


  getMessages() {
    this.firestore.collection("Message").snapshotChanges()
    .subscribe(actions => {
      this.messages = [];
      actions.forEach(action => {
        this.messages.push({
          userId: action.payload.doc.data()["userId"],
          login :action.payload.doc.data()["login"],
          text:  action.payload.doc.data()["text"],
          date: action.payload.doc.data()["date"],
        });
      });
    });
     
  }
}
