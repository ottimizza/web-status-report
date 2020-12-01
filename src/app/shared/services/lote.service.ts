import { Injectable } from '@angular/core';
import { environment } from '@env';
import { GenericResponse } from '@shared/models/GenericResponse';
import { HttpHandlerService } from '@app/services/http-handler.service';

const BASE_URL = environment.serviceUrl;

@Injectable({
  providedIn: 'root'
})
export class LoteService {
  constructor(private http: HttpHandlerService) {}

  getCount() {
    const url = `${BASE_URL}/api/empresa/lotes_processados`;
    return this.http.get<GenericResponse<number>>(url, 'Falha ao obter a contagem de lotes!');
  }
}
