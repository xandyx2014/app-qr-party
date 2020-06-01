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
}
