import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockOpeningComponent } from './add-stock-opening.component';

describe('AddStockOpeningComponent', () => {
  let component: AddStockOpeningComponent;
  let fixture: ComponentFixture<AddStockOpeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStockOpeningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddStockOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
