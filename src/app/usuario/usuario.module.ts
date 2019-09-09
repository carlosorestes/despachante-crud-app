import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule } from  '@angular/material';
  
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule , FormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario.component';
import { UsuarioService } from './usuario.service';


@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
    MatToolbarModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UsuarioComponent
  ],
  providers:[UsuarioService]
})
export class UsuarioModule { }
