import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisoresFormularioComponent } from './televisores-formulario.component';

describe('TelevisoresFormularioComponent', () => {
  let component: TelevisoresFormularioComponent;
  let fixture: ComponentFixture<TelevisoresFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelevisoresFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelevisoresFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
