import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrpPage } from './grp.page';

const routes: Routes = [
  {
    path: '',
    component: GrpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrpPageRoutingModule {}
