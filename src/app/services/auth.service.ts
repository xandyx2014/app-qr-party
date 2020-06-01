import { Injectable } from '@angular/core';
import { URL_API, USER_KEY } from '../shared/config.shared';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, catchError } from 'rxjs/operators';
import { Usuario } from '../shared/interface/user.interface';
import { throwError } from 'rxjs';
import { NotificacionesService } from './notificaciones.service';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = URL_API;
  private userKey = USER_KEY;
  constructor(
    private http: HttpClient,
    private notificacionService: NotificacionesService,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  async login(username, password) {
    const loading = await this.notificacionService.presentLoading();
    this.http.post<Usuario>(`${this.url}/usuario`, { username, password})
    .pipe(
      take(1),
      catchError((err) => {
        loading.dismiss();
        return this.handleError(err);
      }),
    )
    .subscribe( async (resp) => {
      await loading.dismiss();
      this.localStorage.setObject(this.userKey, resp);
      await this.router.navigate(['/folder']);
    });
  }
  private handleError(err) {
    if (err instanceof HttpErrorResponse ) {
      const httpError: HttpErrorResponse = err;
      this.notificacionService.presentAlert(
        'Notificacion',
        'erro de autenticacion',
        err.error.message
      );
      console.log(err);
    }
    return throwError(err.message);
  }
}
