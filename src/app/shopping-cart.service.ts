import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _shopCart: Product[] = [];
  total : number;

  shopCart: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor() {
  }

  addToCart(product: Product) {
    let item: Product = this._shopCart.find((p1)=> p1.type == product.type);
    if(!item){
      this._shopCart.push({... product});
    } else {
      item.quantity += product.quantity;
    }
    this.shopCart.next(this._shopCart);
  }

  cartEmpty() {
    this._shopCart= [];
    this.shopCart.next(this._shopCart);
  }

  deleteProduct(product: Product){
    let index = this._shopCart.indexOf(product);
    this._shopCart.splice(index, 1);
    this.shopCart.next(this._shopCart);
  }

  getTotal(){
    this.total=0;
    this._shopCart.forEach(element => {
      this.total+=element.price*element.quantity;
    });
    return this.total.toFixed(2);
  }
}
