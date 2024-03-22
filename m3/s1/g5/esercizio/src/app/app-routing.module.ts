import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { AudiComponent } from './pages/audi/audi.component';
import { FordComponent } from './pages/ford/ford.component';

const routes: Routes = [

  {
    path:'',
    component: HomeComponent
  },
  {
    path:'Fiat',
    component: FiatComponent
  },
  {
    path:'Audi',
    component: AudiComponent
  },
  {
    path:'Ford',
    component: FordComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
