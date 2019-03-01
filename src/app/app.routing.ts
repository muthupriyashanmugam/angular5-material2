import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mat2TableComponent } from './table/mat-table.component';
import { Mat2StepperComponent } from './stepper/stepper.component';
import { FormValidationComponent } from './formvalidation/formvalidation.component';

const appRoutes: Routes = [
  { path: 'table', component: Mat2TableComponent},
  { path: 'stepper', component: Mat2StepperComponent},
  { path: 'formvalidation', component: FormValidationComponent},
  
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
