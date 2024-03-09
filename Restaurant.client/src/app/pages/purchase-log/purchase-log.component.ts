import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';

@Component({
  selector: 'app-purchase-log',
  standalone: true,
  imports: [],
  templateUrl: './purchase-log.component.html',
  styleUrl: './purchase-log.component.css'
})
export class PurchaseLogComponent {
  constructor(private modalService:NgbModal,){}

  addPurchase(){
    let modalRef = this.modalService.open(AddPurchaseComponent, { size: 'lg', backdrop: 'static' })

    modalRef.result.then(() => {

    })
  }
}
