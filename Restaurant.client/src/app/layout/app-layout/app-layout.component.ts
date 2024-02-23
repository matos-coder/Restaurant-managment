import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-app-layout',
    standalone: true,
    templateUrl: './app-layout.component.html',
    styleUrl: './app-layout.component.css',
    imports: [HeaderComponent, SidebarComponent,RouterOutlet]
})
export class AppLayoutComponent {

}
