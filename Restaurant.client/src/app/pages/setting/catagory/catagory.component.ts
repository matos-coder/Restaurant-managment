import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCatagoryComponent } from './add-catagory/add-catagory.component';

@Component({
  selector: 'app-catagory',
  standalone: true,
  imports: [],
  templateUrl: './catagory.component.html',
  styleUrl: './catagory.component.css'
})
export class CatagoryComponent {
  constructor(private router:Router,
    private modalService:NgbModal,){}
  onAddCatagoryClick(){
    this.router.navigate(['/addCatagory']);
  }
  addCatagory(){
    let modalRef = this.modalService.open(AddCatagoryComponent, { size: 'lg', backdrop: 'static' })

    modalRef.result.then(() => {

    })
  }
}
