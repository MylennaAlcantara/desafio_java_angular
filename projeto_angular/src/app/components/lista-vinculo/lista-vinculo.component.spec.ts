import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVinculoComponent } from './lista-vinculo.component';

describe('ListaVinculoComponent', () => {
  let component: ListaVinculoComponent;
  let fixture: ComponentFixture<ListaVinculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaVinculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaVinculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
