import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === 'auth/login') {
      const customUrl = req.clone({ url: `http://localhost:3000/${req.url}` });
      return next.handle(customUrl);
    }

    const requestWithBearer = req.clone(
    {
      headers: req.headers.append('Authorization',
        `Bearer ${localStorage.getItem('token')}`),
      url: `http://localhost:3000/${req.url}`
    });

    return next.handle(requestWithBearer);
  }

}
