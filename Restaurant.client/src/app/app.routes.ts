import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { AddInventoryComponent } from './pages/inventory/add-inventory/add-inventory.component';
import { StockCountComponent } from './pages/stock/stock-count/stock-count.component';
import { AddStockCountComponent } from './pages/stock/stock-count/add-stock-count/add-stock-count.component';
import { StockOpeningComponent } from './pages/stock/stock-opening/stock-opening.component';
import { StockClosingComponent } from './pages/stock/stock-closing/stock-closing.component';
import { PurchaseLogComponent } from './pages/purchase-log/purchase-log.component';
import { ReportComponent } from './pages/report/report.component';
import { CatagoryComponent } from './pages/setting/catagory/catagory.component';
import { AddCatagoryComponent } from './pages/setting/catagory/add-catagory/add-catagory.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },



  { path: 'applayout', component: AppLayoutComponent,

    children: [
        { path: '', component:DashboardComponent },
        { path: 'dashboard', component:DashboardComponent },
        { path: 'inventory', component:InventoryComponent },
        { path: 'addinventory', component:AddInventoryComponent},
        { path: 'StockCount', component:StockCountComponent },
        { path: 'AddStock', component:AddStockCountComponent },
        { path: 'StockOpening', component:StockOpeningComponent },

        { path: 'StockClosing', component:StockClosingComponent },

        { path: 'PurchaseLog', component:PurchaseLogComponent },
        { path: 'WeeklyReport', component:ReportComponent },
        { path: 'Catagory', component:CatagoryComponent },
        { path: 'addCatagory', component:AddCatagoryComponent },
        {  path: '**', redirectTo: '' , pathMatch: 'full' }
    ]
  },
  { path: 'notfound', component: AppComponent },
  { path: '**', redirectTo: '' , pathMatch: 'full' },

];
