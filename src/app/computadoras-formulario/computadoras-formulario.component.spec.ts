import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorasFormularioComponent } from './computadoras-formulario.component';

describe('ComputadorasFormularioComponent', () => {
  let component: ComputadorasFormularioComponent;
  let fixture: ComponentFixture<ComputadorasFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputadorasFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputadorasFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
