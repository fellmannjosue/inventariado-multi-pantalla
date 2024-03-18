import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriosFormularioComponent } from './accesorios-formulario.component';

describe('AccesoriosFormularioComponent', () => {
  let component: AccesoriosFormularioComponent;
  let fixture: ComponentFixture<AccesoriosFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoriosFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccesoriosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
