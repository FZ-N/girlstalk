import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user.service';
import{ ChatService } from '../chat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-online',
  templateUrl: './online.page.html',
  styleUrls: ['./online.page.scss'],
})
export class OnlinePage implements OnInit {

  onlineuser: any;
  onlineusers = [];
  userId: string;
  constructor(
    private  service:UserService,
    private router:Router
    ) { 
     
      this.service.getOnlineUsers();
  }

  ngOnInit() {
  }

  Gochatindiv(onlineuser){
    this.service.currentChatindiv = onlineuser;
    this.router.navigate(['/chatindiv']);
  }

}