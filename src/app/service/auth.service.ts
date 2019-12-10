import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router,
    private httpClient: HttpClient) { }

  authenticate(username, password) {
    return this.httpClient.get<Usuario>('http://localhost:8080/users/validateLogin').pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        }
      )

    );
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isUserLoggedIn()){
      return true;
    }

    this.router.navigate(['login']);
    return false;

  }

}
