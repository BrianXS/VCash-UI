import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../shared/services/login.service';
import {LoginRequest} from '../shared/entities/login.request';
import {LoginResponse} from '../shared/entities/login.response';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hasFailed = false;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.router.navigate(['/home']);
    }

    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  submitForm() {
    const loginRequest = new LoginRequest(this.loginForm.value.username, this.loginForm.value.password);
    this.loginService.login(loginRequest).subscribe((response) => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('refreshToken', response.refreshToken);
      localStorage.setItem('expirationDate', response.expirationDate);

      this.router.navigate(['/home']);
    }, (error) => {
      this.hasFailed = true;
    });
  }
}
