class Product {
    productId: number;
  
    constructor(id: number) {
      this.productId = id;
    }
  
    getProductId(): string {
      return `Product id is ${this.productId}`;
    }
  }
  
  // Example usage:
  const myProduct = new Product(123);
  console.log(myProduct.getProductId()); // Output: Product id is 123