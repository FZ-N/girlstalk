import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  
  constructor( private  service:UserService) 
  {
   }

  ngOnInit() {
  }

}

