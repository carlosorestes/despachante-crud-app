import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasComponent } from './pessoa/pessoas/pessoas.component';
import { PessoaDetalheComponent } from './pessoa/pessoa-detalhe/pessoa-detalhe.component';
import { PessoaNovoComponent } from './pessoa/pessoa-novo/pessoa-novo.component';
import { PessoaEditarComponent } from './pessoa/pessoa-editar/pessoa-editar.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [

  // Usuario Rotas
  {
    path: 'pessoas',
    component: PessoasComponent,
    data: {title: 'Pessoas'}
  },
  {
    path: 'pessoa-detalhe/:id',
    component: PessoaDetalheComponent,
    data: {title: 'Detalhe Pessoa'}
  },
  {
    path: 'pessoa-novo',
    component: PessoaNovoComponent,
    data: {title: 'Novo Pessoa'}
  },
  {
    path: 'pessoa-editar',
    component: PessoaEditarComponent,
    data: {title: 'Editar Pessoa'}
  },
  // Usuario Rota
  {
    path: 'usuarios',
    component: UsuarioComponent,
    data: {title: 'Usuarios'}
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
