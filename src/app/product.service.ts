import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductInterface} from "./product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductAll():Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>("https://macmickey.azurewebsites.net/Product");
  }

  getProductOne(id: number):Observable<ProductInterface> {
    return this.http.get<ProductInterface>("https://macmickey.azurewebsites.net/Product/"+id);
  }



}
