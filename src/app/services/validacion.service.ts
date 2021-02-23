import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NotificacionesService } from './notificaciones.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL_API } from '../shared/config.shared';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Validacion } from '../shared/interface/validacion.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {
  private url = URL_API;
  constructor(
    private notificacionService: NotificacionesService,
    private http: HttpClient,
    private router: Router
  ) { }
  async validar(codigoInvitacion: string, body: Validacion) {
    const loading = await this.notificacionService.presentLoading();
    return this.http.post(`${this.url}/invitacion/${codigoInvitacion}`, {...body}).pipe(
      catchError(err => {
        loading.dismiss();
        return this.handleError(err);
      })
    ).subscribe(async (resp) => {
      await loading.dismiss();
      this.router.navigate(['/confirmado'], {queryParams: {...resp, nombre: body.nombre, apellido: body.apellido}});
      console.log(resp);
    });
    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
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
