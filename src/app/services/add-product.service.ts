import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iproducts } from '../Models/iproducts';
import { Environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  url: string = `${Environment.apiUrl}/Products`;

  constructor(private HttpClient: HttpClient) {}
  addProduct(newUser: Iproducts): Observable<Iproducts> {
    return this.HttpClient.post<Iproducts>(`${this.url}`, newUser);
  }
  updateProduct( product: Iproducts): Observable<Iproducts> {
    return this.HttpClient.put<Iproducts>(`${this.url}/${product.id}`, product);
  }

  deleteProduct(productId: string) {
    return this.HttpClient.delete<void>(`${this.url}/${productId}`);
  }
  GetPrdId(prdId: string): Observable<Iproducts> {
    return this.HttpClient.get<Iproducts>(
      // `http://localhost:3000/Products/${prdId}`
      `${this.url}/${prdId}`
    );
  }
}
