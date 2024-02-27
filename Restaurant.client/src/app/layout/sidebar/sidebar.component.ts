import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router:Router){}
  onInventoryClick() {
    // Navigate to the Inventory page
    this.router.navigate(['/inventory']);
  }
  onStockCountClick(){
    this.router.navigate(['/StockCount']);
  }
}
