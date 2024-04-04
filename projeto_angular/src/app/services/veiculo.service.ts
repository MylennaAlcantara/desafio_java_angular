import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VeiculoType } from '../types/VeiculoType';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private apiUrl = 'http://localhost:8090/veiculo';

  constructor(private http: HttpClient) { }

  buscarVeiculo(): Observable<any[]> {
    return this.http.get<VeiculoType[]>(this.apiUrl);
  }
  cadastrarVeiculo(veiculo: VeiculoType): Observable<any> {
    return this.http.post<any>(this.apiUrl+"/cadastroVeiculo", veiculo);
  }
}
