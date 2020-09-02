import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserConnexionComponent } from './user-connexion/user-connexion.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserListComponent, UserConnexionComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UserListComponent, UserConnexionComponent]
})
export class UserModule { }
