import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from './Product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  products: Product[];

  constructor(
    private cart: ShoppingCartService,
    private productsDataService: ProductDataService) {
  }

  ngOnInit(): void {
    this.productsDataService.getAll()
    .subscribe(products => this.products = products);
  }

  maxReached(msg: string) {
    alert(msg);
  }

  addToCart(product) : void{
    if(product.quantity!=0){
      if(product.quantity<=product.stock){
        this.cart.addToCart(product);
        product.stock-=product.quantity;
      } else {
        alert("El stock disponible es: " + product.stock);
      }
    } else {
      alert('"' + product.quantity +'"' + " no es una cantidad valida");
    }
    product.quantity = 0;
  }
}
