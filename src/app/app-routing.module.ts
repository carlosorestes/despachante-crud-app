import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasComponent } from './pessoa/pessoas/pessoas.component';
import { PessoaDetalheComponent } from './pessoa/pessoa-detalhe/pessoa-detalhe.component';
import { PessoaNovoComponent } from './pessoa/pessoa-novo/pessoa-novo.component';
import { PessoaEditarComponent } from './pessoa/pessoa-editar/pessoa-editar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AuthComponent } from './auth/auth.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './service/auth.service';
import { AppComponent } from './app.component';

const routes: Routes = [

  // Auth
  {
    path: 'login',
    component: AuthComponent,
    data: {title: 'Login'}
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: {title: 'Logout'}
  },
  // Usuario Rotas
  {
    path: 'pessoas',
    component: PessoasComponent,
    data: {title: 'Pessoas'},
    canActivate: [AuthService]
  },
  {
    path: 'pessoa-detalhe/:id',
    component: PessoaDetalheComponent,
    data: {title: 'Detalhe Pessoa'},
    canActivate: [AuthService]
  },
  {
    path: 'pessoa-novo',
    component: PessoaNovoComponent,
    data: {title: 'Novo Pessoa'},
    canActivate: [AuthService]
  },
  {
    path: 'pessoa-editar',
    component: PessoaEditarComponent,
    data: {title: 'Editar Pessoa'},
    canActivate: [AuthService]
  },
  // Usuario Rota
  {
    path: 'usuarios',
    component: UsuarioComponent,
    data: {title: 'Usuarios'},
    canActivate: [AuthService]
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
