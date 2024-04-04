import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPecaComponent } from './modal-peca.component';

describe('ModalPecaComponent', () => {
  let component: ModalPecaComponent;
  let fixture: ComponentFixture<ModalPecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPecaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
