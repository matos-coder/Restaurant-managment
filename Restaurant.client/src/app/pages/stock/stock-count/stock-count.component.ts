import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-count',
  standalone: true,
  imports: [],
  templateUrl: './stock-count.component.html',
  styleUrl: './stock-count.component.css'
})
export class StockCountComponent {
  constructor(private router:Router){}
  onAddStockClick(){
    this.router.navigate(['/AddStock']);
  }
}
