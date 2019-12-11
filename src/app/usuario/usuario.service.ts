import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Usuario } from '../model/usuario';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

const apiUrl = 'http://localhost:8080/users/';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios (): Observable<Usuario[]> {
    let username='javainuse'
    let password='password'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Usuario[]>(apiUrl,{headers})
      .pipe(
        tap(usuarios => console.log('leu os usuarios')),
        catchError(this.handleError('getUsuarios', []))
      );
  }

  getUsuario(id: number): Observable<Usuario> {
    let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    const url = `${apiUrl}/${id}`;
    return this.http.get<Usuario>(url, {headers}).pipe(
      tap(_ => console.log(`leu entidade Usuario id=${id}`)),
      catchError(this.handleError<Usuario>(`getUsuario id=${id}`))
    );
  }

  addUsuario (usuario): Observable<Usuario> {
    return this.http.post<Usuario>(apiUrl, usuario, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((usuario: Usuario) => console.log('adicionou  Usuario com w/ id=${Usuario._id}')),
      catchError(this.handleError<Usuario>('addUsuario'))
    );
  }

  updateUsuario(id, usuario): Observable<any> {
    const url = '${apiUrl}/${id}';
    return this.http.put(url, usuario, httpOptions).pipe(
      tap(_ => console.log('atualiza Usuario com id=${id}')),
      catchError(this.handleError<any>('updateUsuario'))
    );
  }

  deleteUsuario (id): Observable<Usuario> {
    const url = '${apiUrl}/delete/${id}';

    return this.http.delete<Usuario>(url, httpOptions).pipe(
      tap(_ => console.log('remove Usuario com id=${id}')),
      catchError(this.handleError<Usuario>('deleteUsuario'))
    );
  }

  findUsuarioByParam (usuario): Observable<Usuario[]> {
    const url = `${apiUrl}/byParam`;
    return this.http.post<Usuario[]>(url, usuario, httpOptions).pipe(
      tap(usuarios => console.log('leu os usuarios')),
      catchError(this.handleError('findUsuarioByParam', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}
