import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../../model/pessoa';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  displayedColumns: string[] = [ 'nome', 'cpf', 'telefone1', 'telefone2', 'acao'];
  dataSource: Pessoa[];
  isLoadingResults = true;
  constructor( private _api: PessoaService) { }

  ngOnInit() {
    this._api.getPessoas()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
