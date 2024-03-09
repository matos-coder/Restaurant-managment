import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddStockClosingComponent } from './add-stock-closing/add-stock-closing.component';

@Component({
  selector: 'app-stock-closing',
  standalone: true,
  imports: [],
  templateUrl: './stock-closing.component.html',
  styleUrl: './stock-closing.component.css'
})
export class StockClosingComponent {
  constructor(private modalService:NgbModal,){}
  addStockClosing(){
    let modalRef = this.modalService.open(AddStockClosingComponent, { size: 'lg', backdrop: 'static' })

    modalRef.result.then(() => {

    })
  }
}
