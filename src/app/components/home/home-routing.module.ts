import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentarComponent } from './alimentar/alimentar.component';
import { ComederoComponent } from './comedero/comedero.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'comedero/:id', component: ComederoComponent },
  { path: 'menu/:id', component: MenuComponent },
  { path: 'alimentar/:id', component: AlimentarComponent },
  { path: '**', loadChildren: () => import('./../pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
