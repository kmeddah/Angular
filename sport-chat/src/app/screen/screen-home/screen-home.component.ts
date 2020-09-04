import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-home',
  templateUrl: './screen-home.component.html',
  styleUrls: ['./screen-home.component.css']
})
export class ScreenHomeComponent {

  title = "HOME";

  constructor(
    // @Inject(Router) private router:Router
    private router:Router
  ){}

  userConnectionHandler(user:any){
    // console.table(user);
    this.router.navigate(['chat']);
  }

}
