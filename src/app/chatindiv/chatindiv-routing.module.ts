import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatindivPage } from './chatindiv.page';

const routes: Routes = [
  {
    path: '',
    component: ChatindivPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatindivPageRoutingModule {}
