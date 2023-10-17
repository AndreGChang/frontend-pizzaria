import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoslistaComponent } from './pedidoslista.component';

describe('PedidoslistaComponent', () => {
  let component: PedidoslistaComponent;
  let fixture: ComponentFixture<PedidoslistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoslistaComponent]
    });
    fixture = TestBed.createComponent(PedidoslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
