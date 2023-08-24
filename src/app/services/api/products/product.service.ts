import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = 'https://fakestoreapi.com/products';
  private products:Array<any> = []

  constructor( 
    private http: HttpClient
    ) { }
  getAllProductsWithLimit(limit:number) {
    const prodUrl = `${this.apiUrl}?limit=${limit}`;
    return this.http.get<any>(this.apiUrl)}
}
