import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

export const routes: Routes = [
  { path: '', component: AppLayoutComponent,

    children: [
        { path: '', component:DashboardComponent },
        //{ path: 'employees',component:EmployeeComponent},
    ]
  }
];
