import { Component, OnInit } from '@angular/core';
import{ ChatService } from '../chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messageText: any;
  messages = [];
  userId: string;
  constructor(
    private  service:ChatService
    ) { 
     
      this.getMessages();
  }

  ngOnInit() {
  }


  sendMessage(){
    console.log('messageText :' + this.service.login)
    console.log('messageText :' + this.messageText)
    this.service.firestore.collection('Message').add({
      userId: this.service.userId,
      login: this.service.login,
      text: this.messageText,
      date: new Date().toISOString()
    });
    this.messageText='';
  }


  getMessages() {
    
    this.service.firestore.collection("Message", ref => ref.orderBy('date')).snapshotChanges()
    .subscribe(actions => {
      this.messages = [];
      actions.forEach(action => {
        if(!action.payload.doc.data()["grpTitle"]){
        this.messages.push({
          userId: action.payload.doc.data()["userId"],
          login :action.payload.doc.data()["login"],
          text:  action.payload.doc.data()["text"],
          date: action.payload.doc.data()["date"],
        });}
      });
    });
     
  }

}
