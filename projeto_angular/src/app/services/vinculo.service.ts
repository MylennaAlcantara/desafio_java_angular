import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VinculoType } from '../types/VinculoType';
import { VinculoDTOType } from '../types/VinculoDTOType';

@Injectable({
  providedIn: 'root'
})
export class VinculoService {
  vinculo: VinculoType | undefined;
  private apiUrl = 'http://localhost:8090/pecaVeiculo';

  constructor(private http: HttpClient) { }

  getVinculos(): Observable<VinculoDTOType[]> {
    return this.http.get<VinculoDTOType[]>(this.apiUrl);
  }

  cadastrarVinculo(vinculo: VinculoType){
    return this.http.post<VinculoType>(this.apiUrl+"/cadastrar", vinculo);
  }
}
