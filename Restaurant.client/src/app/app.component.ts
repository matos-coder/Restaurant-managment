import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, RouterLink, DashboardComponent]
})
export class AppComponent {
  title = 'inv5';
  constructor(private router: Router) {}
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
