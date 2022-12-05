import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guards/auth.guard';
import { LoginGuard } from './components/guards/login.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./../app/components/auth/auth.module').then(m => m.AuthModule), canActivate: [LoginGuard] },
  { path: 'home', loadChildren: () => import('./../app/components/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: 'user', loadChildren: () => import('./../app/components/user/user.module').then(m => m.UserModule), canActivate: [AuthGuard] },
  { path: '**', loadChildren: () => import('./../app/components/pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
