import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-inventory',
  standalone: true,
  imports: [],
  templateUrl: './add-inventory.component.html',
  styleUrl: './add-inventory.component.css'
})
export class AddInventoryComponent {
  constructor(private activeModal : NgbActiveModal,
    ) { }
  closeModal(){

    this.activeModal.close()
  }
}
