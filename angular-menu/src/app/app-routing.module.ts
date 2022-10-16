import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponentOld } from './dashboard_old/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemFormComponent } from './item-form/item-form.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'view/:id', component: ItemViewComponent },
  { path: 'form', component: ItemFormComponent },
  { path: 'items', component: ItemsComponent },


  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path:
    'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  { path: 'statistics', component: StatisticsComponent },
  {
    path: 'coupens',
    loadChildren: () => import('./coupens/coupens.module').then(m => m.CoupensModule)
  },
  { path: 'pages', component: PagesComponent },
  { path: 'media', component: MediaComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
