import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsdetailsComponent } from './itemsdetails.component';

describe('ItemsdetailsComponent', () => {
  let component: ItemsdetailsComponent;
  let fixture: ComponentFixture<ItemsdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsdetailsComponent]
    });
    fixture = TestBed.createComponent(ItemsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
