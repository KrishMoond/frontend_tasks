import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Products } from './products/products';
import { Electronics } from './products/electronics/electronics';
import { Crud } from './crud/crud';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  {
    path: 'products',
    component: Products,
    children: [
      { path: 'electronics', component: Electronics }
    ]
  },
  { path: 'crud', component: Crud }
];
