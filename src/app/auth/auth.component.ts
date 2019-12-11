import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username = 'javainuse'
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.authService.authenticate(this.username, this.password)){
      this.router.navigate(['/']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
      this.router.navigate(['/logout']);
    }
  }
}
