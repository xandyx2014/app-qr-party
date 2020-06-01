import { Injectable } from '@angular/core';
import { URL_API } from '../shared/config.shared';
import { HttpClient } from '@angular/common/http';
import { TokenAuth } from '../shared/interface/token.interface';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private url = URL_API;
  constructor(
    private http: HttpClient
  ) { }

  obtener() {
    return this.http.get<TokenAuth>(`${this.url}/token`);
  }
}
