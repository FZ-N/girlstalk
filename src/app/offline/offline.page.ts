import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user.service';
import{ ChatService } from '../chat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.page.html',
  styleUrls: ['./offline.page.scss'],
})
export class OfflinePage implements OnInit {

  offlineuser: any;
  offlineusers = [];
  userId: string;

  constructor(
    private  service:UserService,
    private router:Router
    ) { 
     
      this.service.getOfflineUsers();
  }

  ngOnInit() {
  }

  Gochatindiv(offlineuser){
    this.service.currentChatindiv = offlineuser;
    this.router.navigate(['/chatindiv']);
  }

}