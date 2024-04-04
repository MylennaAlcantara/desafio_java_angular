import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PecaType } from '../types/PecaType';

@Injectable({
  providedIn: 'root'
})
export class PecaService {
  private apiUrl = 'http://localhost:8090/peca';

  constructor(private http: HttpClient) { }

  buscarPecas(): Observable<any[]> {
    return this.http.get<PecaType[]>(this.apiUrl);
  }
  cadastrarPeca(peca: PecaType): Observable<any> {
    return this.http.post<any>(this.apiUrl+"/cadastroPeca", peca);
  }
}
