import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/third-section/detail/detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detail-component',
    component: DetailComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
