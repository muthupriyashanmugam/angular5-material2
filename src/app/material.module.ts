import { NgModule } from '@angular/core';

import { MatInputModule,MatSlideToggleModule,
         MatTableModule,MatSortModule,
         MatPaginatorModule,MatTooltipModule,
         MatButtonModule,MatSnackBarModule,
         MatIconModule,MatToolbarModule,
         MatSidenavModule,MatCheckboxModule,
         MatListModule} from '@angular/material';


@NgModule({
    exports: [
      MatSlideToggleModule,MatTableModule,MatSortModule,
      MatInputModule,MatPaginatorModule,MatTooltipModule,MatButtonModule,
      MatSnackBarModule,MatIconModule,MatToolbarModule,MatSidenavModule,MatCheckboxModule,
      MatListModule
    ]
  })
  export class Material5Module { }