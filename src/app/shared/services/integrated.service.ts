import { Injectable } from '@angular/core';
import { environment } from '@env';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '@app/authentication/authentication.service';
import { GenericPageableResponse } from '@shared/models/GenericPageableResponse';
import { GenericResponse } from '@shared/models/GenericResponse';
import { Integracao, IntegracaoSalesForce } from '@shared/models/Integracao';

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

  public getPaginated(pageSize: number, pageIndex: number) {
    const url = `${BASE_URL}/api/empresa/integrado?pageSize=${pageSize}&pageIndex=${pageIndex}`;
    return this.http.get<GenericPageableResponse<IntegracaoSalesForce>>(url, this._headers);
  }

  private get _headers() {
    const headers = this.auth.getAuthorizationHeaders();
    return { headers };
  }
}
