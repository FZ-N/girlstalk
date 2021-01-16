import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatindivPageRoutingModule } from './chatindiv-routing.module';

import { ChatindivPage } from './chatindiv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatindivPageRoutingModule
  ],
  declarations: [ChatindivPage]
})
export class ChatindivPageModule {}
