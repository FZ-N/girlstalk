import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
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
  messageText: any;
  messages = [];
  //userId: any;
  //get user() {
    //return {
      //  _id: firebase.auth().currentUser.uid, // Problem is here. Make sure user is logged in before doing this.
      //  name: "User",
    //};
  //}
  

  constructor(
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
  sendMessage(){
    
    console.log('messageText :' + this.messageText)
    this.afDB.list('Messages/').push({
      userId: this.userId,
      text: this.messageText,
      date: new Date().toISOString()
    });
    this.messageText='';
  }

  getMessages() {
    this.afDB.list('Messages/', ref => ref.orderByChild('date')).snapshotChanges(['child_added'])
    .subscribe(actions => {
      this.messages = [];
      actions.forEach(action => {
        this.messages.push({
          userId: action.payload.exportVal().userId,
          text: action.payload.exportVal().text,
          date: action.payload.exportVal().date
        });
      });
    });
  }
}
