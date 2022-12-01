import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _shopCart: Product[] = [];

  shopCart: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(product: Product) {
    let item: Product = this._shopCart.find((p1)=> p1.type == product.type);
    if(!item){
      this._shopCart.push({... product});
    } else {
      item.quantity += product.quantity;
    }
    this.shopCart.next(this._shopCart);
  }

  empty() {
    this._shopCart= [];
    this.shopCart.next(this._shopCart);
  }

  deleteP(product: Product){
    let index = this._shopCart.indexOf(product);
    this._shopCart.splice(index, 1);
    this.shopCart.next(this._shopCart);
  }
}
