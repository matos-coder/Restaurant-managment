import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCountComponent } from './stock-count.component';

describe('StockCountComponent', () => {
  let component: StockCountComponent;
  let fixture: ComponentFixture<StockCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
