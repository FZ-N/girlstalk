import { Component, OnInit } from '@angular/core';
import{ ChatService } from '../chat.service';

@Component({
  selector: 'app-grpchat',
  templateUrl: './grpchat.page.html',
  styleUrls: ['./grpchat.page.scss'],
})
export class GrpchatPage implements OnInit {
  grpchat;

  messageText: any;
  messages = [];
  userId: string;

  constructor(private  service:ChatService) { this.getMessages(); }

  ngOnInit() {
    this.grpchat = this.service.currentChatGrp;
    console.log(this.service.currentChatGrp);
  }

  sendMessage(){
    console.log('messageText :' + this.service.login)
    console.log('messageText :' + this.messageText)
    this.service.firestore.collection('Message').add({
      userId: this.service.userId,
      login: this.service.login,
      text: this.messageText,
      date: new Date().toISOString(),
      grpTitle: this.grpchat.title
    });
    this.messageText='';
  }


  getMessages() {
    
    this.service.firestore.collection("Message", ref => ref.orderBy('date')).snapshotChanges()
    .subscribe(actions => {
      this.messages = [];
      actions.forEach(action => {
        this.messages.push({
          userId: action.payload.doc.data()["userId"],
          login :action.payload.doc.data()["login"],
          text:  action.payload.doc.data()["text"],
          date: action.payload.doc.data()["date"],
          grpTitle: action.payload.doc.data()["grpTitle"]
        });
      });
    });
     
  }

}
