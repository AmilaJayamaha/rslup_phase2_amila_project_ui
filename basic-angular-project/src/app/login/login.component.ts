import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    const loginData = { username: this.username, password: this.password };

    this.http.post<any>('your_api_login_endpoint', loginData)
      .subscribe(response => {
        console.log('Login successful', response);
        this.router.navigate(['/user-list']);
      }, error => {
        console.error('Login failed', error);
        this.loginError = 'Invalid username or password';
      });
  }
}
