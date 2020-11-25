import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component'
import {HomeComponent} from './modules/home/home.component';
import {ServiceComponent} from './modules/service/service.component';

const routes: Routes = [
  {path:'',
  component:ContentLayoutComponent,
  children:[{
    path:"",
    component:HomeComponent
  },{
    path:"services/:id",
    component:ServiceComponent
  }]  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
