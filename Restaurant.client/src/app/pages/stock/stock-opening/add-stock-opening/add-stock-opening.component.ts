import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-stock-opening',
  standalone: true,
  imports: [],
  templateUrl: './add-stock-opening.component.html',
  styleUrl: './add-stock-opening.component.css'
})
export class AddStockOpeningComponent {
  constructor(private activeModal : NgbActiveModal,
    ) { }
  closeModal(){

    this.activeModal.close()
  }
}
