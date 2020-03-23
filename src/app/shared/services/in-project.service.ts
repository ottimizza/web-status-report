import { Injectable } from '@angular/core';
import { environment } from '@env';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '@app/authentication/authentication.service';
import { Observable } from 'rxjs';
import { GenericPageableResponse } from '@shared/models/GenericPageableResponse';
import { IntegracaoSalesForce } from '@shared/models/Integracao';
import { GenericResponse } from '@shared/models/GenericResponse';

const BASE_URL = environment.storageBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class InProjectService {
  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  public getCompanys(
    searchCriteria: any
  ): Observable<GenericPageableResponse<IntegracaoSalesForce>> {
    const url = `${BASE_URL}/api/empresa/projeto?${this._encode(searchCriteria)}`;
    return this.http.get<GenericPageableResponse<IntegracaoSalesForce>>(url, this._headers);
  }

  public getById(id: number) {
    const url = `${BASE_URL}/api/empresa/projeto?pageSize=1&pageIndex=0&id=${id}`;
    return this.http.get<GenericPageableResponse<IntegracaoSalesForce>>(url, this._headers);
  }

  public getCount() {
    const url = `${BASE_URL}/api/empresa/projeto/quantidade`;
    return this.http.get<GenericResponse<number>>(url, this._headers);
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
