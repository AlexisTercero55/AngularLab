import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from 'src/app/model/product-repository.model';
import { StaticDataSource } from 'src/app/model/static-data-source.model';


/**
 * There is only one property in this module, providers, 
 * and it tells Angular which classes should be used as 
 * services for the dependency injection feature.
 */
@NgModule({
  providers: [ProductRepository, StaticDataSource]
})
export class FeatureModuleModule { }
