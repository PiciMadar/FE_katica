import { Routes } from '@angular/router';
import { CListComponent } from './components/categories/list/list.component';
import { CatFormComponent } from './components/categories/form/form.component';
import { TListComponent } from './components/trafics/list/list.component';
import { TraFormComponent } from './components/trafics/form/form.component';

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
    }
];
