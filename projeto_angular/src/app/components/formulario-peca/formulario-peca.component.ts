import { Component } from '@angular/core';
import { PecaType } from '../../types/PecaType';
import { PecaService } from '../../services/peca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-peca',
  templateUrl: './formulario-peca.component.html',
  styleUrl: './formulario-peca.component.css'
})
export class FormularioPecaComponent {
  peca: PecaType = {
    id: 0,
    codigo: '',
    descricao: '',
    montadora: ''
  };

  constructor(private apiService: PecaService, private router: Router) { }

  onSubmit(): void {
    this.apiService.cadastrarPeca(this.peca).subscribe(
      response => {
        console.log('Dados enviados com sucesso!', response);
        alert("Salvo com sucesso!");
        this.router.navigate(["/vinculos"]);
      },
      error => {
        console.error('Erro ao enviar dados:', error);
      }
    );
  }
}
