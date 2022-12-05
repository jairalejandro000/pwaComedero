import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MaterialModule } from 'src/app/modules/material.module';


@NgModule({
  declarations: [
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    PagenotfoundRoutingModule,
    MaterialModule
  ]
})
export class PagenotfoundModule { }
