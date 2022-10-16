import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLevelThreeTwoComponent } from './product-level-three-two.component';

describe('ProductLevelThreeTwoComponent', () => {
  let component: ProductLevelThreeTwoComponent;
  let fixture: ComponentFixture<ProductLevelThreeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLevelThreeTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLevelThreeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
