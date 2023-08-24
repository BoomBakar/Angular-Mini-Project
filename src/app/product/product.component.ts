import { Component, inject } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productService:ProductService = inject(ProductService);
  products:Array<any> = [];
  constructor() {
    this.productService.getAllProductsWithLimit(5).subscribe({
      next: (result) => {
        this.products = result;
      }
    })

   }

}
