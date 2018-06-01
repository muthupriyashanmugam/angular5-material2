import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mat2TableComponent } from './table/mat-table.component';
const appRoutes: Routes = [
  { path: 'table', component: Mat2TableComponent},
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
