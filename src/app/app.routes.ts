import { Routes } from '@angular/router';
import { CListComponent } from './components/categories/list/list.component';
import { CatFormComponent } from './components/categories/form/form.component';
import { TListComponent } from './components/trafics/list/list.component';
import { TraFormComponent } from './components/trafics/form/form.component';
import { CostumerComponent } from './components/costumers/form/form.component';
import { ProductsComponent } from './components/products/form/form.component';
import { PricingComponent } from './components/pricing/form/form.component';
import { CosListComponent } from './components/costumers/list/list.component';
import { ProListComponent } from './components/products/list/list.component';
import { PriListComponent } from './components/pricing/list/list.component';

export const routes: Routes = [
    {
        path:'categories',
        component: CListComponent
    },
    {
        path:'trafics',
        component: TListComponent
    },
    {
        path:'traficform',
        component: TraFormComponent
    }
    ,
    {
        path:'catform',
        component: CatFormComponent
    },
    {
        path:'costumers',
        component: CostumerComponent
    },
    {
        path: 'costumerList',
        component: CosListComponent
    },
    {
        path:'products',
        component: ProductsComponent
    },
    {
        path: 'productsList',
        component: ProListComponent
    },
    {
        path:'pricing',
        component: PricingComponent
    },
    {
        path: 'pricingList',
        component: PriListComponent
    }
];
