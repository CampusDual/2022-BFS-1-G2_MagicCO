import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { ServicesDetailComponent } from './services-detail/services-detail.component';
import { ServicesNewComponent } from './services-new/services-new.component';


const routes: Routes = [
  {
    path: '',
    component: ServicesHomeComponent
  },
  {
    path: 'new',
    component: ServicesNewComponent
  },
  {
    path: ':id_service',
    component: ServicesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
