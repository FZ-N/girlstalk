import { Component } from '@angular/core';
import{ UserService } from '../user.service';
import{ AdminService } from '../admin.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  connected = false;
  private blocked:string;
  constructor(private  service:UserService ,private  admin:AdminService,private afAuth :AngularFireAuth, ) { 
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
      } else {
        console.log('UserId: ' + auth.uid);
        service.userId = auth.uid;
        service.email = auth.email;
      }
    });
        console.log(service.email);
        console.log(service.login);

        this.service.firestore.collection("User").snapshotChanges()
        .subscribe(actions => {
          actions.forEach(action => {
           
            if (action.payload.doc.data()["email"]==this.service.email){
         
              this.blocked = action.payload.doc.data()["blocked"]  ;
              }
          });
        });
        console.log(this.blocked)
        console.log(this.service.email)
      }
}