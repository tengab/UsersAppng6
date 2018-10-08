import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from "ag-grid-angular";
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { UsersGridComponent } from './users/users-grid/users-grid.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { RouterLinkRendererComponent } from './users/users-grid/router-link-renderer.component';
import { UserInfoComponent } from './user-details/user-info/user-info.component';
import { UserMapComponent } from './user-details/user-map/user-map.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersGridComponent,
    UserDetailsComponent,
    UsersComponent,
    RouterLinkRendererComponent,
    UserInfoComponent,
    UserMapComponent,

  ],
  entryComponents: [
    RouterLinkRendererComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyByYJ0xFVKhi5Ro8jp1600xtlI5bFr8VnE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
