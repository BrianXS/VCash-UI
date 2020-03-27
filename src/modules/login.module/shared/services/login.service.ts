import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest} from '../entities/login.request';
import {LoginResponse} from '../entities/login.response';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(loginRequest: LoginRequest) {
    return this.http.post<LoginResponse>('http://localhost:3000/auth/login', loginRequest);
  }
}
