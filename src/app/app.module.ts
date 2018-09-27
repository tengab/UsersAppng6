import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from "ag-grid-angular";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersGridComponent } from './users-grid/users-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
