import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mat2TableComponent } from './table/mat-table.component';
import { Mat2StepperComponent } from './stepper/stepper.component';
const appRoutes: Routes = [
  { path: 'table', component: Mat2TableComponent},
  { path: 'stepper', component: Mat2StepperComponent}
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
