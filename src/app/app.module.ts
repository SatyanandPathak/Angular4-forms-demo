import { FormArrayDemoComponent } from './formarrays/formarraydemo.component';
import { ReactiveFormsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateFormsComponent } from './templareforms/templateforms.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, 
    TemplateFormsComponent,
    ReactiveFormsComponent,
    FormArrayDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
