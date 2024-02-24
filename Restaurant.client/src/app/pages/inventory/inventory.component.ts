import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  constructor(private router:Router){}
  onAddInventoryClick(){
    this.router.navigate(['/addinventory']);
  }
}
