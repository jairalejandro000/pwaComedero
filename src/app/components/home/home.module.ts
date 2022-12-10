import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ComederoComponent } from './comedero/comedero.component';
import { MenuComponent } from './menu/menu.component';
import { AlimentarComponent } from './alimentar/alimentar.component';
import { NewComederoDialogComponent } from './home/new-comedero-dialog/new-comedero-dialog.component';
import { ComederoDialogComponent } from './comedero/comedero-dialog/comedero-dialog.component';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    ComederoComponent,
    MenuComponent,
    AlimentarComponent,
    NewComederoDialogComponent,
    ComederoDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
