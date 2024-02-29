import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockClosingComponent } from './stock-closing.component';

describe('StockClosingComponent', () => {
  let component: StockClosingComponent;
  let fixture: ComponentFixture<StockClosingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockClosingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
