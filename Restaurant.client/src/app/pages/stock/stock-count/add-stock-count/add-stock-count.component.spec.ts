import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockCountComponent } from './add-stock-count.component';

describe('AddStockCountComponent', () => {
  let component: AddStockCountComponent;
  let fixture: ComponentFixture<AddStockCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStockCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddStockCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
