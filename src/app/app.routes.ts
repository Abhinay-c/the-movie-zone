import { Routes } from '@angular/router';
import { SearchPage } from './components/search-page/search-page';
import { Details } from './components/details/details';

export const routes: Routes = [
    {
        path: '',
        component: SearchPage
    },
    {
        path: 'details',
        component: Details
    }
];
