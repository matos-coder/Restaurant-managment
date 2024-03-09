import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddStockOpeningComponent } from './add-stock-opening/add-stock-opening.component';

@Component({
  selector: 'app-stock-opening',
  standalone: true,
  imports: [],
  templateUrl: './stock-opening.component.html',
  styleUrl: './stock-opening.component.css'
})
export class StockOpeningComponent {
  constructor(private modalService:NgbModal,){}
  addStockOpening(){
    let modalRef = this.modalService.open(AddStockOpeningComponent, { size: 'lg', backdrop: 'static' })

    modalRef.result.then(() => {

    })
  }
}
