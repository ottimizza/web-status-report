import { Injectable } from '@angular/core';
import { environment } from '@env';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '@app/authentication/authentication.service';
import { Observable } from 'rxjs';
import { GenericPageableResponse } from '@shared/models/GenericPageableResponse';
import { IntegracaoSalesForce } from '@shared/models/Integracao';
import { GenericResponse } from '@shared/models/GenericResponse';
import { HttpHandlerService } from '@app/services/http-handler.service';

const BASE_URL = environment.storageBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class InProjectService {
  constructor(private http: HttpHandlerService) {}

  public getCompanys(
    searchCriteria: any
  ): Observable<GenericPageableResponse<IntegracaoSalesForce>> {
    const url = `${BASE_URL}/api/empresa/projeto`;
    return this.http.get<GenericPageableResponse<IntegracaoSalesForce>>(
      [url, searchCriteria],
      'Falha ao obter empresas em projeto!'
    );
  }

  public getById(id: number) {
    const url = `${BASE_URL}/api/empresa/projeto?pageSize=1&pageIndex=0&id=${id}`;
    return this.http.get<GenericPageableResponse<IntegracaoSalesForce>>(
      url,
      'Falha ao obter empresa em projeto!'
    );
  }

  public getCount() {
    const url = `${BASE_URL}/api/empresa/projeto/quantidade`;
    return this.http.get<GenericResponse<number>>(
      url,
      'Falha ao obter total de empresas em projeto'
    );
  }
}
