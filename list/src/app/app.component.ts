import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public userText: string;

 liste = [
   'Daniel',
   'Séverine',
   'Pascal',
   'Khaled',
   'Mickaël'
 ];

 addToListe() {
   this.liste.push(this.userText);
 }
}
