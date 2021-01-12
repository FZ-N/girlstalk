import { Component, OnInit } from '@angular/core';

import{ UserService } from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private  service:UserService) {   }

  ngOnInit() {
  }

  changeOnline(mail){
    this.service.onlineUser(mail)
  }

  changeOffline(mail){
    this.service.offlineUser(mail)
  }
}
