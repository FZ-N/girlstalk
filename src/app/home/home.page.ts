import { Component } from '@angular/core';
import{ UserService } from '../user.service';
import{ AdminService } from '../admin.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  connected = false;
  private blocked:string;
  constructor(private  service:UserService ,private  admin:AdminService ) { 

        console.log(service.email);
        console.log(service.login);
      }

 

}
