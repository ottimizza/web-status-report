import { Injectable } from '@angular/core';
import { environment } from '@env';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '@app/authentication/authentication.service';
import { GenericPageableResponse } from '@shared/models/GenericPageableResponse';
import { GenericResponse } from '@shared/models/GenericResponse';
import { IntegracaoSalesForce } from '@shared/models/Integracao';
import { HttpHandlerService } from '@app/services/http-handler.service';

const BASE_URL = environment.storageBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class IntegratedService {
  constructor(private http: HttpHandlerService) {}

  public getCount() {
    const url = `${BASE_URL}/api/empresa/integrado/quantidade`;
    return this.http.get<GenericResponse<number>>(url, 'Falha ao obter contagem de integrações!');
  }

  public getPaginated(searchCriteria: any) {
    const url = `${BASE_URL}/api/empresa/integrado`;
    return this.http.get<GenericPageableResponse<IntegracaoSalesForce>>(
      [url, searchCriteria],
      'Falha ao obter lista de integrações!'
    );
  }
}
