import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { PessoaNovoComponent } from './pessoa-novo/pessoa-novo.component';
import { PessoaEditarComponent } from './pessoa-editar/pessoa-editar.component';

@NgModule({
  declarations: [PessoasComponent, PessoaDetalheComponent, PessoaNovoComponent, PessoaEditarComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PessoasComponent,
    PessoaDetalheComponent,
    PessoaNovoComponent,
    PessoaEditarComponent
  ]
})
export class PessoaModule { }
