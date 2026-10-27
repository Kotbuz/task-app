import { Routes } from '@angular/router';
import { Home } from './pages/home/home'
import { Tasks } from './pages/tasks/tasks'
import { ProductList } from './pages/product-list/product-list';
import { ProductCard } from './pages/product-card/product-card';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'tasks', component: Tasks },
    { path: 'catalog', component: ProductList },
    { path: 'card', component: ProductCard },
    { path: 'cart', component: Cart },
    { path: '**', redirectTo: '' },
];
