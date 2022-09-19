import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishFilterComponent } from './wish-filter.component';

describe('WishFilterComponent', () => {
  let component: WishFilterComponent;
  let fixture: ComponentFixture<WishFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
