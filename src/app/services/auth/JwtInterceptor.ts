import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";
import {AccountService} from "./AccountService";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private accountService: AccountService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isAuthEd =  this.accountService.isAuthEd();
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    const isApiBaseUrl = request.url.startsWith(environment.apiBase);
    if (isAuthEd) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this.accountService.token}` }
      });
    }

    console.log('OK')
    request = request.clone({
      setHeaders: { 'Content-type': `application/json` }
    });

    return next.handle(request);
  }
}
