import { Component } from '@angular/core';
import{ ChatService } from '../chat.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  connected = false;

  constructor(private  service:ChatService ) { }

 

}
