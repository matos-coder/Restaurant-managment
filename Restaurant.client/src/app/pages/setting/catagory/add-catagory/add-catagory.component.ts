import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-catagory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-catagory.component.html',
  styleUrl: './add-catagory.component.css'
})
export class AddCatagoryComponent {
  constructor(private activeModal : NgbActiveModal,
    ) { }
  closeModal(){

    this.activeModal.close()
  }
}
