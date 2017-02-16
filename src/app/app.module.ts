import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicAttributeComponent } from './components/dynamic-attribute/dynamic-attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicAttributeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
