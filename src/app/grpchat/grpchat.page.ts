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
    let myDate = new Date().toISOString().toString();
    let dateFormat = myDate.split('T');
    console.log('messageText :' + this.service.login)
    console.log('messageText :' + this.messageText)
    this.service.firestore.collection('Message').add({
      userId: this.service.userId,
      login: this.service.login,
      text: this.messageText,
      date:  dateFormat[0] +" "+ dateFormat[1].substring(0, 8),
      grpTitle: this.grpchat.title
    });
    this.messageText='';
  }


  getMessages() {
    
    this.service.firestore.collection("Message", ref => ref.orderBy('date')).snapshotChanges()
    .subscribe(actions => {
      this.messages = [];
      actions.forEach(action => {
      
        if(  this.grpchat.title ==  action.payload.doc.data()["grpTitle"]){
        this.messages.push({
          userId: action.payload.doc.data()["userId"],
          login :action.payload.doc.data()["login"],
          text:  action.payload.doc.data()["text"],
          date: action.payload.doc.data()["date"]
        });}
      });
    });
     
  }

}
