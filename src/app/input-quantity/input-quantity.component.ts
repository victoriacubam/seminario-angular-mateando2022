import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/Product';


@Component({
  selector: 'app-input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrls: ['./input-quantity.component.scss']
})
export class InputQuantityComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  upQuantity(): void {
    if(this.quantity<this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else
      this.maxReached.emit("La cantidad máxima disponible es: "+ this.max);
  }

  downQuantity(): void {
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

   /* changeQuantity(event:any, product: Product): void {
    if(event.key>product.quantity){
      //event.preventDefault();
      console.log(event.key)
      this.quantityChange.emit();
    }
  }*/
}
