import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CRUDComponent } from './components/crud/crud.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:"basiccrud",
    component:CRUDComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
