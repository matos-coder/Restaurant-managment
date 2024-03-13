import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  router=inject(Router);
  constructor(private userService: UserService,) { }

  isLoggedIn(){
    return this.userService.isLoggedIn();
  }
}
