import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.page.html',
  styleUrls: ['./online.page.scss'],
})
export class OnlinePage implements OnInit {

  constructor(private  service:UserService) { }

  ngOnInit() {
  }

}
