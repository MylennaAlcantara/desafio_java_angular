import { Component, OnInit } from '@angular/core';
import { VinculoService } from '../../services/vinculo.service';
import { Router } from '@angular/router';
import { VinculoDTOType } from '../../types/VinculoDTOType';

@Component({
  selector: 'app-lista-vinculo',
  templateUrl: './lista-vinculo.component.html',
  styleUrls: ['./lista-vinculo.component.css']
})
export class ListaVinculoComponent implements OnInit {
  vinculos: VinculoDTOType[] = [];

  constructor(private vinculoService: VinculoService, private router: Router) { }

  ngOnInit(): void {
    this.vinculoService.getVinculos().subscribe(vinculos => this.vinculos = vinculos);
  }

  criarNovoVinculo(){
    this.router.navigate(["/cadastrar-vinculo"])
  }
}
