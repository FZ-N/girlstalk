import { Component, OnInit } from '@angular/core';
import{ ChatService } from '../chat.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
})
export class RulesPage implements OnInit {

  constructor(private  service:ChatService) { }

  ngOnInit() {
  }

}
