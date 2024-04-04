import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VeiculoType } from '../types/VeiculoType';
import { PecaType } from '../types/PecaType';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private showModal = new BehaviorSubject<boolean>(false);
  estadoModal$ = this.showModal.asObservable();
  private veiculoSelecionadoSource = new BehaviorSubject<VeiculoType>({
    id: 0,
    nome_veiculo: "",
    modelo: "",
    anoFinal: "",
    anoInicial: ""
  });
  veiculoSelecionado$ = this.veiculoSelecionadoSource.asObservable();
  private pecaSelecionadoSource = new BehaviorSubject<PecaType>({
    id: 0,
    codigo: "",
    descricao: "",
    montadora: ""
  });
  pecaSelecionado$ = this.pecaSelecionadoSource.asObservable();

  constructor() { }

  enviarVeiculoSelecionado(veiculo: VeiculoType) {
    if (veiculo) {
      this.veiculoSelecionadoSource.next(veiculo);
    }
  }
  enviarPecaSelecionado(peca: PecaType) {
    if(peca){
      this.pecaSelecionadoSource.next(peca);
    }
  }
  enviarEstadoModal(showModal: boolean) {
    this.showModal.next(showModal);
  }
}
