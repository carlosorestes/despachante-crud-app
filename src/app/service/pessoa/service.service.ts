import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Pessoa } from '../../model/pessoa';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

const apiUrl = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getProdutos (): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(apiUrl)
      .pipe(
        tap(produtos => console.log('leu os produtos')),
        catchError(this.handleError('getProdutos', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
