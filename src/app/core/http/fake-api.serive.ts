import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GenericResponse } from '@shared/models/GenericResponse';
import { GenericPageableResponse } from '@shared/models/GenericPageableResponse';

class Overview {
  constructor(
    public lancamentosProcessados: number,
    public horasEconomizadas: number,
    public horaBase: number,
    public valorEconomizado: number
  ) {}
}

class IntegratedOrganizations {
  constructor(public title: string, public lastPackage: string, public total: number) {}
}

class InProgressOrganization {
  constructor(
    public id: number,
    public integration: string,
    public projectStatus: string,
    public lastAction: string,
    public lastActionDate: string,
    public pendingAction: string,
    public pendingActionDate: string,
    public responsables: string
  ) {}
}

@Injectable({ providedIn: 'root' })
export class FakeApiService {
  getOverview(): Observable<GenericResponse<Overview>> {
    const ret = this._simpleNormalize(new GenericResponse<Overview>());
    const horasEconomizadas = Math.round(Math.random() * 40000);
    const overview = new Overview(
      Math.round(Math.random() * 10000),
      horasEconomizadas,
      15,
      horasEconomizadas * 15
    );
    ret.record = overview;
    return of(ret);
  }

  getIntegratedOrganizations(): Observable<GenericPageableResponse<IntegratedOrganizations>> {
    const ret = this._complexNormalize(new GenericPageableResponse<IntegratedOrganizations>());
    const date = new Date();
    ret.records = [];
    for (let i = 0; i < 10; i++) {
      ret.records.push(
        new IntegratedOrganizations(
          `( ${Math.round(Math.random() * 200)} )  NOVO HORIZONTE COMÉRCIO E DERIVADOS`,
          `${date.getMonth() + 1}/${date.getFullYear()}`,
          Math.round(Math.random() * 5000)
        )
      );
    }
    return of(ret);
  }

  getCountIntegratedOrganizations(): Observable<GenericResponse<number>> {
    return this._getCount();
  }

  getCountInProgressOrganizations() {
    return this._getCount();
  }

  getInProjectOrganizations(): Observable<GenericPageableResponse<InProgressOrganization>> {
    const ret = this._complexNormalize(new GenericPageableResponse<InProgressOrganization>());
    const date = new Date();
    ret.records = [];
    for (let i = 0; i < 10; i++) {
      ret.records.push(
        new InProgressOrganization(
          Math.round(Math.random() * 100),
          this._possibleIntegration,
          '4. Roteiro',
          this._lastAction,
          `${date.getDate()}/${date.getMonth() + 10}/${date.getFullYear()}`,
          'Aguardando planilha preenchida',
          `${date.getDate()}/${date.getMonth() + 10}/${date.getFullYear()}`,
          'Imagine vários nome aqui'
        )
      );
    }
    return of(ret);
  }

  private _getCount() {
    const ret = this._simpleNormalize(new GenericResponse<number>());
    ret.record = 10;
    return of(ret);
  }

  private get _possibleIntegration() {
    const array = [
      'CHAPERFIL INDUSTRIA E COMERCIO',
      'CLEO WAGNAR DO SANTOS EIRELI',
      'RICAMARE',
      'MAINHARDT OUTSOURCING LTDA'
    ];
    return array[Math.round(Math.random() * 3)];
  }

  private get _lastAction() {
    const array = [
      'Enviada planilha auxiliar',
      'Enviada planilha principal',
      'Contratou a integração',
      'Preencheu planilha auxiliar'
    ];
    return array[Math.round(Math.random() * 3)];
  }

  private _simpleNormalize(response: GenericResponse<any>) {
    response.message = 'OK.';
    response.status = '200';
    return response;
  }

  private _complexNormalize(response: GenericPageableResponse<any>) {
    response.pageInfo = {
      hasNext: false,
      hasPrevious: false,
      pageIndex: 0,
      pageSize: 10,
      totalElements: 10,
      totalPages: 1
    };
    return response;
  }
}
