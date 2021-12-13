import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { GridDataViewComponent } from './components/grid-data-view/grid-data-view.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    GridDataViewComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
