import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from './Product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [
    {
      type: "Tradicional",
      taste: "Amargo e intenso",
      weight: 500,
      price: 500,
      stock: 20,
      image: "assets/img/tradicional.png",
      sale: false,
      quantity: 0,
    },
    {
      type: "Premium",
      taste: "Amargo moderado",
      weight: 500,
      price: 599.99,
      stock: 5,
      image: "assets/img/premium.png",
      sale: true,
      quantity: 0,
    },
    {
      type: "Compuesta",
      taste: "Leve gusto a hiervas",
      weight: 500,
      price: 550,
      stock: 12,
      image: "assets/img/compuesta.png",
      sale: false,
      quantity: 0,
    },
    {
      type: "Classica",
      taste: "Moderadamente intenso. Fino aroma. Levemente ahumado y parejo",
      weight: 500,
      price: 480,
      stock: 0,
      image: "assets/img/classica.png",
      sale: false,
      quantity: 0,
    },
    {
      type: "Padron Argentino",
      taste: "Intenso",
      weight: 500,
      price: 550,
      stock: 12,
      image: "assets/img/padron-arg.png",
      sale: true,
      quantity: 0,
    },
    {
      type: "Canarias",
      taste: "Amargo e intenso",
      weight: 500,
      price: 650,
      stock: 0,
      image: "assets/img/canarias.png",
      sale: false,
      quantity: 0,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(product: Product): void {
    if(product.quantity<product.stock)
      product.quantity++;
    /*else
      alert("No hay stock suficiente");*/
  }

  downQuantity(product: Product): void {
    if(product.quantity>0)
      product.quantity--;
  }

 /* changeQuantity(event:any, product: Product): void {
    if(event.key>product.quantity){
      //event.preventDefault();
      console.log(event.key)
    }
  }*/

}
