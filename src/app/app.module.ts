import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { MateandoProductsComponent } from './mateando-products/mateando-products.component';
import { MateandoProductsInfoComponent } from './mateando-products-info/mateando-products-info.component';
import { MateandoAboutComponent } from './mateando-about/mateando-about.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShoppingCartComponent,
    MateandoProductsComponent,
    MateandoProductsInfoComponent,
    MateandoAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
