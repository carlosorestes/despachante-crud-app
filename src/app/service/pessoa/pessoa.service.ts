import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Pessoa } from '../../model/pessoa';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

const apiUrl = 'http://localhost:8080/persons/';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  getPessoas (): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(apiUrl)
      .pipe(
        tap(pessoas => console.log('leu as pessoas')),
        catchError(this.handleError('getPessoas', []))
      );
  }

  addPessoa (pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(apiUrl, pessoa, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((pessoa: Pessoa) => console.log('adicionou  pessoa com w/ id=${pessoa._id}')),
      catchError(this.handleError<Pessoa>('addPessoa'))
    );
  }

  updatePessoa(id, pessoa): Observable<any> {
    const url = '${apiUrl}/${id}';
    return this.http.put(url, pessoa, httpOptions).pipe(
      tap(_ => console.log('atualiza pessoa com id=${id}')),
      catchError(this.handleError<any>('updatePessoa'))
    );
  }

  deletePessoa (id): Observable<Pessoa> {
    const url = '${apiUrl}/delete/${id}';

    return this.http.delete<Pessoa>(url, httpOptions).pipe(
      tap(_ => console.log('remove Pessoa com id=${id}')),
      catchError(this.handleError<Pessoa>('deletePessoa'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
