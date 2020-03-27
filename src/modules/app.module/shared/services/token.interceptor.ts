import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === 'http://localhost:3000/auth/login') {
      return next.handle(req);
    }

    const requestWithBearer = req.clone(
    {headers: req.headers.append('Authorization',
        `Bearer ${localStorage.getItem('token')}`)
    });

    return next.handle(requestWithBearer);
  }

}
