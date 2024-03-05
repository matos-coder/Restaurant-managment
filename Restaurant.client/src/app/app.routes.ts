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

export const routes: Routes = [
  { path: '', component: AppLayoutComponent,

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
        {  path: '**', redirectTo: '' , pathMatch: 'full' }
    ]
  },
  { path: 'notfound', component: AppComponent },
  { path: '**', redirectTo: '' , pathMatch: 'full' },

];
