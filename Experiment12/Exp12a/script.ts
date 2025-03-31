class Product {
    private productId: number;
  
    constructor(id: number) {
      this.productId = id;
    }
  
    // Method to set the productId
    setProductId(newId: number): void {
      this.productId = newId;
    }
  
    // Method to get the productId
    getProductId(): number {
      return this.productId;
    }
  }
  
  // Example usage:
  const myProduct = new Product(100);
  console.log("Initial Product ID:", myProduct.getProductId()); // Output: Initial Product ID: 100
  
  myProduct.setProductId(2000);
  console.log("Updated Product ID:", myProduct.getProductId()); // Output: Updated Product ID: 2000