import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Material5Module } from '../app/material.module';

//Components added
import { AppComponent } from './app.component';
import { Mat2TableComponent } from '../app/table/mat-table.component';

//Router added
import { Routing } from '../app/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    Mat2TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    Material5Module,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
