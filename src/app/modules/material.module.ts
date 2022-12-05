import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';


const materialComponents = [
  MatFormFieldModule,
  MatCardModule,
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  FormsModule,
  ReactiveFormsModule,
  MatGridListModule,
  LayoutModule,
  MatToolbarModule,
  MatMenuModule
]
@NgModule({
  exports: [materialComponents],
  imports: [materialComponents]
})
export class MaterialModule { }
