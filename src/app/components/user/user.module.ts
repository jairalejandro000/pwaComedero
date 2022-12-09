import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { InformationDialogComponent } from './profile/information-dialog/information-dialog.component';


@NgModule({
  declarations: [
    ProfileComponent,
    InformationDialogComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
