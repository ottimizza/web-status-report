import { Injectable } from '@angular/core';
import { environment } from '@env';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '@app/authentication/authentication.service';
import { GenericPageableResponse } from '@shared/models/GenericPageableResponse';
import { GenericResponse } from '@shared/models/GenericResponse';
import { IntegracaoSalesForce } from '@shared/models/Integracao';

const BASE_URL = environment.storageBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class IntegratedService {
  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  public getCount() {
    const url = `${BASE_URL}/api/empresa/integrado/quantidade`;
    return this.http.get<GenericResponse<number>>(url, this._headers);
  }

  public getPaginated(searchCriteria: any) {
    const url = `${BASE_URL}/api/empresa/integrado?${this._encode(searchCriteria)}`;
    return this.http.get<GenericPageableResponse<IntegracaoSalesForce>>(url, this._headers);
  }

  private _encode(params: any): string {
    return Object.keys(params)
      .map(key => {
        return [key, params[key]].map(encodeURIComponent).join('=');
      })
      .join('&');
  }

  private get _headers() {
    const headers = this.auth.getAuthorizationHeaders();
    return { headers };
  }
}
