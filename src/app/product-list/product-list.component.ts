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
      image: 'https://github.com/victoriacubam/seminario-angular-mateando2022/blob/master/src/assets/img/tradicional.png?raw=true',
      sale: false,
      quantity: 0,
    },
    {
      type: "Premium",
      taste: "Amargo moderado",
      weight: 500,
      price: 599.99,
      stock: 5,
      image: "https://github.com/victoriacubam/seminario-angular-mateando2022/blob/master/src/assets/img/premium.png?raw=true",
      sale: true,
      quantity: 0,
    },
    {
      type: "Compuesta",
      taste: "Leve gusto a hiervas",
      weight: 500,
      price: 550,
      stock: 12,
      image: "https://github.com/victoriacubam/seminario-angular-mateando2022/blob/master/src/assets/img/compuesta.png?raw=true",
      sale: false,
      quantity: 0,
    },
    {
      type: "Classica",
      taste: "Moderadamente intenso. Fino aroma. Levemente ahumado y parejo",
      weight: 500,
      price: 480,
      stock: 0,
      image: "https://github.com/victoriacubam/seminario-angular-mateando2022/blob/master/src/assets/img/classica.png?raw=true",
      sale: false,
      quantity: 0,
    },
    {
      type: "Padron Argentino",
      taste: "Intenso",
      weight: 500,
      price: 550,
      stock: 12,
      image: "https://github.com/victoriacubam/seminario-angular-mateando2022/blob/master/src/assets/img/padron-arg.png?raw=true",
      sale: true,
      quantity: 0,
    },
    {
      type: "Canarias",
      taste: "Amargo e intenso",
      weight: 500,
      price: 650,
      stock: 0,
      image: "https://github.com/victoriacubam/seminario-angular-mateando2022/blob/master/src/assets/img/canarias.png?raw=true",
      sale: false,
      quantity: 0,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  maxReached(msg: string) {
    alert(msg);
  }




}
