import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrpchatPageRoutingModule } from './grpchat-routing.module';

import { GrpchatPage } from './grpchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrpchatPageRoutingModule
  ],
  declarations: [GrpchatPage]
})
export class GrpchatPageModule {}
