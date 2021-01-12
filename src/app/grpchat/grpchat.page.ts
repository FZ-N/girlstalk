import { Component, OnInit } from '@angular/core';
import{ ChatService } from '../chat.service';

@Component({
  selector: 'app-grpchat',
  templateUrl: './grpchat.page.html',
  styleUrls: ['./grpchat.page.scss'],
})
export class GrpchatPage implements OnInit {
  grpchat;

  constructor(private  service:ChatService) { }

  ngOnInit() {
    this.grpchat = this.service.currentChatGrp;
    console.log(this.service.currentChatGrp);
  }

}
