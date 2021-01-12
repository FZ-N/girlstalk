import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrpchatPage } from './grpchat.page';

const routes: Routes = [
  {
    path: '',
    component: GrpchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrpchatPageRoutingModule {}
