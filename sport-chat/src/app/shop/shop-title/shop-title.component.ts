import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-title',
  templateUrl: './shop-title.component.html',
  styleUrls: ['./shop-title.component.css']
})
export class ShopTitleComponent implements OnInit {

  title = "DEFAULT_TITLE";

  constructor() { }

  ngOnInit(): void {
  }

}
