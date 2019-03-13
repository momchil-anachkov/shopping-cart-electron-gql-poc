import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { routes as shoppingRoutes } from '../feature/shopping/shopping-routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/shopping/catalogue',
    pathMatch: 'full',
  },
  {
    path: 'shopping',
    component: MainComponent,
    children: shoppingRoutes,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
