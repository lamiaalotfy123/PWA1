import { Iproducts } from './../Models/iproducts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsWithApiService {
  url: string = `${Environment.apiUrl}/Products`;
  constructor(private httpclient: HttpClient) {}
  getAllProducts(): Observable<Iproducts[]> {
    return this.httpclient.get<Iproducts[]>(this.url);
    // return this.httpclient.get<Iproducts[]>('http://localhost:3000/Products');
  }
  GetPrdId(prdId: string): Observable<Iproducts> {
    return this.httpclient.get<Iproducts>(
      // `http://localhost:3000/Products/${prdId}`
      `${this.url}/${prdId}`
    );
  }
  addProduct(newProduct: Iproducts): Observable<Iproducts> {
    return this.httpclient.post<Iproducts>(
      // 'http://localhost:3000/Products'
      `${this.url}`,
      // http://localhost:3000/Products',
      newProduct
    );
  }
  updateProduct(
    prdId: string,
    updateProduct: Iproducts
  ): Observable<Iproducts> {
    return this.httpclient.patch<Iproducts>(
      // `http://localhost:3000/Products/${prdId}`
      `${this.url}/${prdId}`,
      updateProduct
    );
  }

  deleteProduct(prdId: string): Observable<void> {
    return this.httpclient.delete<void>(`${this.url}/${prdId}`);
  }
  searchMaterial(material: string): Observable<Iproducts[]> {
    return this.httpclient.get<Iproducts[]>(`${this.url}?Material=${material}`);
  }
}
