import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductslistComponent } from './productslist.component';

describe('ProductslistComponent', () => {
  let component: ProductslistComponent;
  let fixture: ComponentFixture<ProductslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
