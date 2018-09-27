import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from './user-details/user-details.component'
import {UsersGridComponent} from "./users/users-grid/users-grid.component";

const routes: Routes = [
  {path: 'user-details/:id', component: UserDetailsComponent},
  {path: '', component: UsersGridComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
