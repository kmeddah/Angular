import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserConnexionComponent } from './user-connexion/user-connexion.component';



@NgModule({
  declarations: [UserListComponent, UserConnexionComponent],
  imports: [
    CommonModule
  ],
  exports: [UserListComponent, UserConnexionComponent]
})
export class UserModule { }
