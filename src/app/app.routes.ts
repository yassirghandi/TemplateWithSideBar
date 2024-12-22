import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductsComponent } from './component/products/products.component';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { CoupensComponent } from './component/coupens/coupens.component';
import { PagesComponent } from './component/pages/pages.component';
import { Sublevel1Component } from './component/sublevel1/sublevel1.component';

export const routes: Routes = [
    {path:'', redirectTo:'dashboard' , pathMatch: 'full'},
    {path:'dashboard' , component : DashboardComponent},
    {path:'products' , component : ProductsComponent},
    {path:'statistics' , component : StatisticsComponent},
    {path:'coupens' , component : CoupensComponent},
    {path:'coupens/sublevel1' , component: Sublevel1Component},
    {path:'pages' , component : PagesComponent},
];
