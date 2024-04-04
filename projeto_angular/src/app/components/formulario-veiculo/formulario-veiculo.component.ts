import { Component } from '@angular/core';
import { VeiculoService } from '../../services/veiculo.service';
import { VeiculoType } from '../../types/VeiculoType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-veiculo',
  templateUrl: './formulario-veiculo.component.html',
  styleUrls: ['./formulario-veiculo.component.css']
})
export class FormularioVeiculoComponent {
  veiculo: VeiculoType = {
    id: 0,
    nome_veiculo: "",
    modelo: "",
    anoInicial: "",
    anoFinal: ""
  }
  constructor(private veiculoService: VeiculoService, private router: Router) { }

  onSubmit(): void {
    this.veiculoService.cadastrarVeiculo(this.veiculo).subscribe(
      response => {
        console.log('Dados enviados com sucesso!', response);
        alert("Salvo com sucesso!")
        this.router.navigate(['/vinculos']);
      },
      error => {
        console.error('Erro ao enviar dados:', error);
      }
    );
  }
}
