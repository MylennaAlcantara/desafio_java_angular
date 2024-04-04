import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVinculoComponent } from './components/lista-vinculo/lista-vinculo.component';
import { FormularioVinculoComponent } from './components/formulario-vinculo/formulario-vinculo.component';
import { FormularioVeiculoComponent } from './components/formulario-veiculo/formulario-veiculo.component';
import { FormularioPecaComponent } from './components/formulario-peca/formulario-peca.component';
const routes: Routes = [
  { path: 'vinculos', component: ListaVinculoComponent },
  { path: 'cadastrar-vinculo', component: FormularioVinculoComponent },
  { path: 'cadastrar-veiculo', component: FormularioVeiculoComponent },
  { path: 'cadastrar-peca', component: FormularioPecaComponent },
  { path: '', redirectTo: '/vinculos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
