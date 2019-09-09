import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../../model/pessoa';

@Component({
  selector: 'app-pessoa-novo',
  templateUrl: './pessoa-novo.component.html',
  styleUrls: ['./pessoa-novo.component.css']
})
export class PessoaNovoComponent implements OnInit {

  pessoaForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: PessoaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pessoaForm = this.formBuilder.group({
      'nome_pessoa' : [null, Validators.required],
      'cpf_pessoa' : [null, [Validators.required, Validators.minLength(11)]],
      'telefone1_pessoa' : [null, Validators.required],
      'telefone2_pessoa' : [null]
    });
  }

  addPessoa(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addPessoa(form)
      .subscribe(res => {
          const id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/pessoa-detalhe', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
