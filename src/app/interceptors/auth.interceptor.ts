import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpEvent,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { USER_KEY } from '../shared/config.shared';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    constructor(
        private localStorageService: LocalStorageService
    ) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const user = this.localStorageService.getObject(USER_KEY);
        const token = typeof user?.token === 'undefined' ? '' : user.token;
        const newRequest = req.clone({
            headers: req.headers.set('Authorization', token),
        });
        return next.handle(newRequest);
    }
}
