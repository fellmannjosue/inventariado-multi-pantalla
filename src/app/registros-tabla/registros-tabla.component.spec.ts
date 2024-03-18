import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosTablaComponent } from './registros-tabla.component';

describe('RegistrosTablaComponent', () => {
  let component: RegistrosTablaComponent;
  let fixture: ComponentFixture<RegistrosTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrosTablaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
