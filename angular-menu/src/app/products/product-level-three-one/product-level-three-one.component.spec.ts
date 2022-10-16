import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLevelThreeOneComponent } from './product-level-three-one.component';

describe('ProductLevelThreeOneComponent', () => {
  let component: ProductLevelThreeOneComponent;
  let fixture: ComponentFixture<ProductLevelThreeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLevelThreeOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLevelThreeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
