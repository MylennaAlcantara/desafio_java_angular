import { Component } from '@angular/core';
import { PecaType } from '../../types/PecaType';
import { PecaService } from '../../services/peca.service';
import { SharedDataService } from '../../services/share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-peca',
  templateUrl: './modal-peca.component.html',
  styleUrl: './modal-peca.component.css'
})
export class ModalPecaComponent {
  pecas: PecaType[] = [];

  constructor(private pecaService: PecaService, private sharedDataService: SharedDataService, private router: Router) { }
  
  ngOnInit(): void {
    this.pecaService.buscarPecas().subscribe(pecas => this.pecas = pecas);
  }

  onRowDoubleClick(peca: PecaType) {
    this.sharedDataService.enviarPecaSelecionado(peca);
    this.sharedDataService.enviarEstadoModal(false);
  }
}
