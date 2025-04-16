import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static-data-source.model";

/**
 * When Angular needs to create a new instance of the repository, 
 * it will inspect the class and see that it needs 
 * a StaticDataSource object to invoke the ProductRepository 
 * constructor and create a new object.
 * The repository constructor calls the data source’s 
 * getProducts method and then uses the subscribe method 
 * on the Observable object that is returned to receive 
 * the product data
 */
@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];
    constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
                this.products = data;
                this.categories = data.map(p => p.category)
                    .filter((c, index, array) => array.indexOf(c) == index).sort();
            }
        );
    }
    getProducts(category: string = null): Product[] {
        return this.products
            .filter(p => category == null || category == p.category);
    }
    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }
    getCategories(): string[] {
        return this.categories;
    }
}
