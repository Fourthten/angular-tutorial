import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard_old/dashboard.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsComponent } from './items/items.component';
import { ItemSearchComponent } from './item-search/item-search.component';

import { BarChartComponent } from './components/bar-chart/bar.chart.component';
import { PieChartComponent } from './components/pie-chart/pie.chart.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    CanvasJSChart,
    DashboardComponent,
    ItemsComponent,
    ItemDetailComponent,
    ItemSearchComponent,
    BarChartComponent,
    PieChartComponent,
    ItemFormComponent,
    ItemViewComponent,
    BodyComponent,
    SidenavComponent,
    StatisticsComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    SublevelMenuComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
