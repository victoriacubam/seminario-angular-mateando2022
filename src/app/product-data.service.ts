import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-list/Product';

const URL = "https://62b5df9d42c6473c4b3c124b.mockapi.io/api/v1/products";

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(URL);
  }
}
