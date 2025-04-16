import { ProductRepository } from './product-repository.model';

describe('ProductRepository', () => {
  it('should create an instance', () => {
    expect(new ProductRepository()).toBeTruthy();
  });
});
