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
  
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { PessoaNovoComponent } from './pessoa-novo/pessoa-novo.component';
import { PessoaEditarComponent } from './pessoa-editar/pessoa-editar.component';
import { PessoaService } from './pessoa.service';
import { RouterModule } from '@angular/router';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PessoasComponent, PessoaDetalheComponent, PessoaNovoComponent, PessoaEditarComponent],
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
    PessoasComponent,
    PessoaDetalheComponent,
    PessoaNovoComponent,
    PessoaEditarComponent
  ],
  providers:[PessoaService]
})
export class PessoaModule { }
