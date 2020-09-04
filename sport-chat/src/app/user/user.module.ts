import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserConnexionComponent } from './user-connexion/user-connexion.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [UserListComponent, UserConnexionComponent],
  imports: [
    SharedModule
  ],
  exports: [UserListComponent, UserConnexionComponent]
})
export class UserModule { }
