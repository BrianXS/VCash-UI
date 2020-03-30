import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pipe} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class TokenVerificator {
  constructor(private http: HttpClient, private router: Router) { }

  verifyTokenValidity() {
    this.http.get('auth/verify').subscribe(response => {}, error => {
      localStorage.clear();
      this.router.navigate(['/']);
    });
  }
}
