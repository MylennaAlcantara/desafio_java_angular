import { Component, HostListener, OnInit } from '@angular/core';
import { VeiculoType } from '../../types/VeiculoType';
import { VeiculoService } from '../../services/veiculo.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-modal-veiculo',
  templateUrl: './modal-veiculo.component.html',
  styleUrl: './modal-veiculo.component.css'
})
export class ModalVeiculoComponent implements OnInit {
  veiculos: VeiculoType[] = [];

  showModal: boolean = false;

  constructor(private veiculoService: VeiculoService, private sharedDataService: SharedDataService, private router: Router) { }
  
  ngOnInit(): void {
    this.veiculoService.buscarVeiculo().subscribe(veiculos => this.veiculos = veiculos);
  }

  onRowDoubleClick(veiculo: VeiculoType) {
    this.sharedDataService.enviarVeiculoSelecionado(veiculo);
    this.sharedDataService.enviarEstadoModal(false);
  }
}
