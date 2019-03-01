import { NgModule } from '@angular/core';

import { MatInputModule,MatSlideToggleModule,
         MatTableModule,MatSortModule,
         MatPaginatorModule,MatTooltipModule,
         MatButtonModule,MatSnackBarModule,
         MatIconModule,MatToolbarModule,
         MatSidenavModule,MatCheckboxModule,
         MatListModule,MatStepperModule,
         MatCardModule} from '@angular/material';


@NgModule({
    exports: [
      MatSlideToggleModule,MatTableModule,MatSortModule,
      MatInputModule,MatPaginatorModule,MatTooltipModule,MatButtonModule,
      MatSnackBarModule,MatIconModule,MatToolbarModule,MatSidenavModule,MatCheckboxModule,
      MatListModule,MatStepperModule,MatCardModule
    ]
  })
  export class Material5Module { }