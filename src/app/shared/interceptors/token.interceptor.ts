import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<HttpHeaders>, next: HttpHandler) {

      request = request.clone({
        setHeaders: {
          'x-api-key': environment.apiKey
        },
      });

    return next.handle(request);
  }
}
