import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  constructor(private router:Router,private modalService:NgbModal,){}
  onAddInventoryClick(){
    this.router.navigate(['/addinventory']);
  }
  addInventory(){
    let modalRef = this.modalService.open(AddInventoryComponent, { size: 'lg', backdrop: 'static' })

    modalRef.result.then(() => {

    })
  }
}
