import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-mateando-about',
  templateUrl: './mateando-about.component.html',
  styleUrls: ['./mateando-about.component.scss']
})
export class MateandoAboutComponent implements OnInit{
  products: Product[];


  constructor(private productsDataService: ProductDataService) {
  }

  ngOnInit(): void {
    this.productsDataService.getAll()
    .subscribe(products => this.products = products);
  }
}
