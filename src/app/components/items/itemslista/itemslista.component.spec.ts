import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemslistaComponent } from './itemslista.component';

describe('ItemslistaComponent', () => {
  let component: ItemslistaComponent;
  let fixture: ComponentFixture<ItemslistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemslistaComponent]
    });
    fixture = TestBed.createComponent(ItemslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
