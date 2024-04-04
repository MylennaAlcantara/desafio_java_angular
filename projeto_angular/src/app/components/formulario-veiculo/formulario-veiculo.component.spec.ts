import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVeiculoComponent } from './formulario-veiculo.component';

describe('FormularioVeiculoComponent', () => {
  let component: FormularioVeiculoComponent;
  let fixture: ComponentFixture<FormularioVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioVeiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
