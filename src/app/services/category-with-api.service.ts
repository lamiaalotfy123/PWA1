import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryWithApiService {

  constructor(private httpclient:HttpClient) { }
  getAllCategories():Observable<ICategory[]>{
    return this.httpclient.get<ICategory[]>('http://localhost:3000/Categories');
  }
  
}
