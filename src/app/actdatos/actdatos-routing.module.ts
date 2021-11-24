import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActdatosPage } from './actdatos.page';

const routes: Routes = [
  {
    path: '',
    component: ActdatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActdatosPageRoutingModule {}
