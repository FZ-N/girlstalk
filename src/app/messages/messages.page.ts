import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  offlineuser: any;

  constructor( private  service:UserService, private router:Router) 
  {
    this.service.getPrivateMessages();
   
   }

  ngOnInit() {
  }

  Gochatindiv(offlineuser){
    this.service.currentChatindiv = offlineuser;
    this.router.navigate(['/chatindiv']);
  }
}

