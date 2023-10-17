import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaslistaComponent } from './pessoaslista.component';

describe('PessoaslistaComponent', () => {
  let component: PessoaslistaComponent;
  let fixture: ComponentFixture<PessoaslistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaslistaComponent]
    });
    fixture = TestBed.createComponent(PessoaslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
