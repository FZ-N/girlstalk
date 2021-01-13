import { Component, OnInit } from '@angular/core';
import{ AdminService } from '../admin.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {

  constructor(private  service:AdminService) { }
  ngOnInit() {
  }

}
