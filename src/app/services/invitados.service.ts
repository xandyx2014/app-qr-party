import { Injectable } from '@angular/core';
import { URL_API } from '../shared/config.shared';
import { HttpClient } from '@angular/common/http';
import { Invitados } from '../shared/interface/invitados.interface';
import { Validacion } from '../shared/interface/validacion.interface';

@Injectable({
  providedIn: 'root'
})
export class InvitadosService {
  private url = URL_API;
  constructor(
    private http: HttpClient
  ) { }
  obtener(idInvitacion) {
    return this.http.get<Invitados>(`${this.url}/invitacion/${idInvitacion}/invitado`);
  }
}
