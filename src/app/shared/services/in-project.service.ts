import { Injectable } from '@angular/core';
import { environment } from '@env';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '@app/authentication/authentication.service';
import { Observable } from 'rxjs';
import { GenericPageableResponse } from '@shared/models/GenericPageableResponse';
import { InProjectSalesForce } from '@shared/models/InProject';
import { GenericResponse } from '@shared/models/GenericResponse';

const BASE_URL = environment.storageBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class InProjectService {
  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  public getCompanys(
    pageSize: number,
    pageIndex: number
  ): Observable<GenericPageableResponse<InProjectSalesForce>> {
    const url = `${BASE_URL}/api/empresa/projeto?pageSize=${pageSize}&pageIndex=${pageIndex}`;
    return this.http.get<GenericPageableResponse<InProjectSalesForce>>(url, this._headers);
  }

  public getCount() {
    const url = `${BASE_URL}/api/empresa/projeto/quantidade`;
    return this.http.get<GenericResponse<number>>(url, this._headers);
  }

  private get _headers() {
    const headers = this.auth.getAuthorizationHeaders();
    return { headers };
  }
}
