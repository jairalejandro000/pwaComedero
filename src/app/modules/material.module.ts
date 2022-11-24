import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const materialComponents = [
  MatFormFieldModule,
  MatCardModule,
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
]
@NgModule({
  exports: [materialComponents],
  imports: [materialComponents]
})
export class MaterialModule { }
