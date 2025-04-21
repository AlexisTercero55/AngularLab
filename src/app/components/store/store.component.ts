import { Component } from '@angular/core';
import { ProductRepository } from 'src/app/model/product-repository.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent  
{
  /**
   * The constructor receives a ProductRepository object as an 
   * argument, provided through the dependency injection feature.
   * @param repository
   */
  constructor(private repository: ProductRepository) { }

  get products(): Product[] {
    return this.repository.getProducts();
  }
  
  get categories(): string[] {
    return this.repository.getCategories();
  }
}
