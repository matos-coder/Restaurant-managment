import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockClosingComponent } from './add-stock-closing.component';

describe('AddStockClosingComponent', () => {
  let component: AddStockClosingComponent;
  let fixture: ComponentFixture<AddStockClosingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStockClosingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddStockClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
