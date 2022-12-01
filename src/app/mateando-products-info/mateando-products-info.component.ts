import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-mateando-products-info',
  templateUrl: './mateando-products-info.component.html',
  styleUrls: ['./mateando-products-info.component.scss']
})
export class MateandoProductsInfoComponent implements OnInit{
  products: Product[];

  constructor(private productsDataService: ProductDataService) {
  }

  ngOnInit(): void {
    this.productsDataService.getAll()
    .subscribe(products => this.products = products);
  }
}
