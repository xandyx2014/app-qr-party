import { Injectable } from '@angular/core';
import { URL_API } from '../shared/config.shared';
import { HttpClient } from '@angular/common/http';
import { Invitacion } from '../shared/interface/invitacion.interface';

@Injectable({
  providedIn: 'root'
})
export class InvitacionesService {
  private url = URL_API;
  constructor(
    private http: HttpClient
  ) { }
  obtener() {
    return this.http.get<Invitacion[]>(`${this.url}/invitacion`);
  }
  crear(invitacion: Invitacion) {
    return this.http.post<Invitacion>(`${this.url}/invitacion`, invitacion);
  }
  borrar(id: number) {
    return this.http.delete(`${this.url}/invitacion/${id}`);
  }
  actualizar(id: number, invitacion: Invitacion) {
    return this.http.put(`${this.url}/invitacion/${id}`, {...invitacion});
  }
}
