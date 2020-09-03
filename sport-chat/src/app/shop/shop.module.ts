import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopProductComponent } from './shop-product/shop-product.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopTitleComponent } from './shop-title/shop-title.component';
import { ShopComponent } from './shop/shop.component';
import { ShopButtonComponent } from './shop-button/shop-button.component';



@NgModule({
  declarations: [
    ShopProductComponent, 
    ShopListComponent, 
    ShopTitleComponent, 
    ShopComponent, 
    ShopButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ShopComponent, ShopButtonComponent]
})
export class ShopModule { }
