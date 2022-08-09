import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopsHomeComponent } from './shops-home/shops-home.component';
import { ShopsDetailsComponent } from './shops-details/shops-details.component';
import { ShopsNewComponent } from './shops-new/shops-new.component';


const routes: Routes = [
  {
    path: '',
    component: ShopsHomeComponent
  },
  {
    path: 'new',
    component: ShopsNewComponent
  },
  {
    path: ':id_shop',
    component: ShopsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
