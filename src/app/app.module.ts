import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

//Components added
import { Mat2TableComponent } from '../app/table/mat-table.component';

//Router added
import { routing } from '../app/app.routing';

@NgModule({
  declarations: [
    AppComponent,Mat2TableComponent
  ],
  imports: [
    BrowserModule,MatSlideToggleModule,MatTableModule,MatSortModule,BrowserAnimationsModule,
    MatInputModule,MatPaginatorModule,MatTooltipModule,FlexLayoutModule,MatButtonModule,
    MatSnackBarModule,MatIconModule,MatToolbarModule,MatSidenavModule,MatCheckboxModule,
    FormsModule,MatListModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
