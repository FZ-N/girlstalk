import { Component, OnInit } from '@angular/core';
import{ ChatService } from '../chat.service';

@Component({
  selector: 'app-grp',
  templateUrl: './grp.page.html',
  styleUrls: ['./grp.page.scss'],
})
export class GrpPage implements OnInit {

  grpTitle: any;
  groups = [];
  userId: string;
  constructor(
    private  service:ChatService
    ) { 
     
      this.getGrps();
  }

  ngOnInit() {
  }

  CreateGrp(){
    console.log('grpTitle :' + this.grpTitle)
    this.service.firestore.collection('Grp').add({
      userId: this.service.userId,
      login: this.service.login,
      title: this.grpTitle,
    });
    this.grpTitle='';
  }

  getGrps() {
    
    this.service.firestore.collection("Grp").snapshotChanges()
    .subscribe(actions => {
      this.groups = [];
      actions.forEach(action => {
        this.groups.push({
          userId: action.payload.doc.data()["userId"],
          login :action.payload.doc.data()["login"],
          title:  action.payload.doc.data()["title"]
        });
      });
    });
     
  }

}