import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-connexion',
  templateUrl: './user-connexion.component.html',
  styleUrls: ['./user-connexion.component.css']
})
export class UserConnexionComponent implements OnInit {

  public user = {
    name: 'Name',
    password: 'Password'
  };

  @Output() userConnection = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  requestConnection() {
    console.log(this.user);
    //Connection OK
    this.userConnection.emit(this.user);
  }

}
