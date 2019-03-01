import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CurrencyPipe } from '@angular/common';


import { Material5Module } from '../app/material.module';

//Components added
import { AppComponent } from './app.component';
import { Mat2TableComponent } from '../app/table/mat-table.component';
import { Mat2StepperComponent } from '../app/stepper/stepper.component';
import { FormValidationComponent } from '../app/formvalidation/formvalidation.component';

//Router added
import { Routing } from '../app/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    Mat2TableComponent,
    Mat2StepperComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    Material5Module,
    ReactiveFormsModule,
    Routing
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
