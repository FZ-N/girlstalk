import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrpPageRoutingModule } from './grp-routing.module';

import { GrpPage } from './grp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrpPageRoutingModule
  ],
  declarations: [GrpPage]
})
export class GrpPageModule {}
