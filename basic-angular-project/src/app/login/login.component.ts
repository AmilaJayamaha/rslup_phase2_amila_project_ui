import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  login(): void {
    const loginData = { username: this.username, password: this.password };

    this.authService.login(loginData)
      .subscribe(
        response => {
          this.router.navigate(['/user-list']);
        },
        error => {
          this.loginError = 'Invalid username or password';
         
        }
      );
  }
}
