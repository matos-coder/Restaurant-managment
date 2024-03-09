import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-purchase',
  standalone: true,
  imports: [],
  templateUrl: './add-purchase.component.html',
  styleUrl: './add-purchase.component.css'
})
export class AddPurchaseComponent {
  constructor(private activeModal : NgbActiveModal,
    ) { }
  closeModal(){

    this.activeModal.close()
  }
}
