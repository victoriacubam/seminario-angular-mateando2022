import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDataService } from '../product-data.service';
import { Product } from '../product-list/Product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit{
  shopCart$: Observable<Product[]>;

  constructor(private cart: ShoppingCartService, private products : ProductDataService){
    this.shopCart$ = cart.shopCart.asObservable();
  }

  ngOnInit(): void {
  }

  empty() : void {
    this.cart.empty();
  }

  deleteP(product : Product) : void {
    this.cart.deleteP(product);
  }

  getTotal(){
    return this.cart.getTotal();
  }



}
