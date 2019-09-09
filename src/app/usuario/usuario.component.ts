import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Usuario } from '../model/usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioForm: FormGroup;

  displayedColumns: string[] = [ 'nome', 'phone', 'acao'];
  dataSource: Usuario[];
  isLoadingResults = true;
  constructor(private router: Router, private _api: UsuarioService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.loadindForm();
    
    this.loadFieldForm();

  }

  loadindForm(){
    this.usuarioForm = this.formBuilder.group({
      'nome' : [null],
      'phone' : [null]
    });
  }

  loadFieldForm(){
    this._api.getUsuarios()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  findUsuarioByParam(form: NgForm){
    this.isLoadingResults = true;

    this._api.findUsuarioByParam(form)
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
    
    this.loadindForm();
  }

}
