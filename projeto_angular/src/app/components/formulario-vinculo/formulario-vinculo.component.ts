import { Component } from '@angular/core';
import { VeiculoType } from '../../types/VeiculoType';
import { SharedDataService } from '../../services/share-data.service';
import { PecaType } from '../../types/PecaType';
import { VinculoService } from '../../services/vinculo.service';
import { VinculoType } from '../../types/VinculoType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-vinculo',
  templateUrl: './formulario-vinculo.component.html',
  styleUrl: './formulario-vinculo.component.css'
})
export class FormularioVinculoComponent {
  showModal: boolean = false;
  showModalPeca: boolean = false;

  veiculos: VeiculoType[] = [];

  peca: PecaType = {
    id: 0,
    codigo: "",
    descricao: "",
    montadora: ""
  };

  vinculo: VinculoType = {
    id: 0,
    veiculos: [],
    peca: this.peca
  }

  constructor(
    private sharedDataService: SharedDataService,
    private vinculoService: VinculoService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.limparDados();
    this.sharedDataService.veiculoSelecionado$.subscribe(veiculo => {
      if (veiculo) {
        this.veiculos.push(veiculo);
        this.vinculo.veiculos = this.veiculos;
        this.showModal = false
      }
    });

    this.sharedDataService.pecaSelecionado$.subscribe(peca => {
      if (peca) {
        this.peca = peca;
        this.vinculo.peca = this.peca;
        this.showModalPeca = false;
      }
    });
  }

  onSubmit(): void {
    if (this.peca.id !== 0 && this.veiculos.length > 0) {
      this.vinculoService.cadastrarVinculo(this.vinculo).subscribe({
        next: () => {
          this.limparDados();
          console.log('Dados enviados com sucesso!');
          this.router.navigate(['/vinculos']);
        },
        error: (error) => {
          console.error('Erro ao enviar dados:', error);
        }
      });
    } else {
      console.error('Por favor, selecione uma peça e pelo menos um veículo.');
    }
  }

  onHandleClickVeiculo() {
    this.showModal = true;
  }
  onHandleClickPeca() {
    this.showModalPeca = true;
  }

  private limparDados(): void {
    this.peca = { id: 0, codigo: "", descricao: "", montadora: "" };
    this.veiculos = [];
    this.vinculo = { id: 0, veiculos: this.veiculos, peca: this.peca };
    this.sharedDataService.enviarEstadoModal(false);
    this.sharedDataService.enviarPecaSelecionado(this.peca);
    this.sharedDataService.enviarVeiculoSelecionado({id: 0, nome_veiculo: "", modelo: "", anoFinal: "", anoInicial: ""});
  }
}
