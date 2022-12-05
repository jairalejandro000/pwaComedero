import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ComederoComponent } from './comedero/comedero.component';
import { MenuComponent } from './menu/menu.component';
import { AlimentarComponent } from './alimentar/alimentar.component';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    ComederoComponent,
    MenuComponent,
    AlimentarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
