import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioPecaComponent } from './components/formulario-peca/formulario-peca.component';
import { FormularioVeiculoComponent } from './components/formulario-veiculo/formulario-veiculo.component';
import { FormularioVinculoComponent } from './components/formulario-vinculo/formulario-vinculo.component';
import { ListaVinculoComponent } from './components/lista-vinculo/lista-vinculo.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalVeiculoComponent } from './components/modal-veiculo/modal-veiculo.component';
import { ModalPecaComponent } from './components/modal-peca/modal-peca.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaVinculoComponent,
    FormularioPecaComponent,
    FormularioVeiculoComponent,
    FormularioVinculoComponent,
    HeaderComponent,
    ModalVeiculoComponent,
    ModalPecaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
