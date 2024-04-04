import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVinculoComponent } from './formulario-vinculo.component';

describe('FormularioVinculoComponent', () => {
  let component: FormularioVinculoComponent;
  let fixture: ComponentFixture<FormularioVinculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioVinculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioVinculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
