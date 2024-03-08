import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catagory',
  standalone: true,
  imports: [],
  templateUrl: './catagory.component.html',
  styleUrl: './catagory.component.css'
})
export class CatagoryComponent {
  constructor(private router:Router){}
  onAddCatagoryClick(){
    this.router.navigate(['/addCatagory']);
  }
}
