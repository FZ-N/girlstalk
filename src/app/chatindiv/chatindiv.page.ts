import { Component, OnInit } from '@angular/core';
import{ ChatService } from '../chat.service';
import{ UserService } from '../user.service';

@Component({
  selector: 'app-chatindiv',
  templateUrl: './chatindiv.page.html',
  styleUrls: ['./chatindiv.page.scss'],
})
export class ChatindivPage implements OnInit {

  onlineuser;

  messageIndivText: any;
  messagesIndiv = [];
  userId: string;

  constructor(private  service:UserService) { this.getMessages(); }

  ngOnInit() {
    this.onlineuser = this.service.currentChatindiv;
    console.log(this.service.currentChatindiv);
  }

  sendMessage(){
    console.log('messageIndivText :' + this.service.login)
    console.log('messageIndivText :' + this.messageIndivText)
    this.service.firestore.collection('MessageIndiv').add({
      userId: this.service.userId,
      login: this.service.login,
      text: this.messageIndivText,
      date: new Date().toISOString(),
      onlineuser: this.onlineuser.title
    });
    this.messageIndivText='';
  }


  getMessages() {
    
    this.service.firestore.collection("MessageIndiv", ref => ref.orderBy('date')).snapshotChanges()
    .subscribe(actions => {
      this.messagesIndiv = [];
      actions.forEach(action => {
        this.messagesIndiv.push({
          userId: action.payload.doc.data()["userId"],
          login :action.payload.doc.data()["login"],
          text:  action.payload.doc.data()["text"],
          date: action.payload.doc.data()["date"],
          onlineuser: action.payload.doc.data()["onlineuser"]
        });
      });
    });
     
  }

}
