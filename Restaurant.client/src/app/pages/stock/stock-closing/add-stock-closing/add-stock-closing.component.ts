import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-stock-closing',
  standalone: true,
  imports: [],
  templateUrl: './add-stock-closing.component.html',
  styleUrl: './add-stock-closing.component.css'
})
export class AddStockClosingComponent {
  constructor(private modalService:NgbModal,private activeModal : NgbActiveModal,){}
  
  closeModal(){

    this.activeModal.close()
  }
}
