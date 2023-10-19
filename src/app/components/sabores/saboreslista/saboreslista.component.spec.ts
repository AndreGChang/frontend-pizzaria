import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaboreslistaComponent } from './saboreslista.component';

describe('SaboreslistaComponent', () => {
  let component: SaboreslistaComponent;
  let fixture: ComponentFixture<SaboreslistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaboreslistaComponent]
    });
    fixture = TestBed.createComponent(SaboreslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
