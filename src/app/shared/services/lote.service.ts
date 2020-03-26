import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '@app/authentication/authentication.service';
import { environment } from '@env';
import { GenericResponse } from '@shared/models/GenericResponse';

const BASE_URL = environment.storageBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class LoteService {
  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  getCount() {
    const url = `${BASE_URL}/api/empresa/lotes_processados`;
    return this.http.get<GenericResponse<number>>(url, this._headers);
  }

  private get _headers() {
    const headers = this.auth.getAuthorizationHeaders();
    return { headers };
  }
}
