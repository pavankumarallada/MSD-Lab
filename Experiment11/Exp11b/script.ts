// Class for Product
class Product {
    productId: number;
    productName: string;
    categoryName: string;
    quantity: number;
    inStock: boolean;
  }
  
  // Array to hold Product objects
  const productList: Product[] = [];
  
  // Create Product objects by directly assigning properties
  const product1: Product = {
    productId: 101,
    productName: "Smartphone",
    categoryName: "Electronics",
    quantity: 50,
    inStock: true,
  };
  
  const product2: Product = {
    productId: 205,
    productName: "The Great Gatsby",
    categoryName: "Books",
    quantity: 20,
    inStock: true,
  };
  
  
  // Place the objects into the productList array
  productList.push(product1);
  productList.push(product2);
  
  
  // Log the productList array to see the objects
  console.log(productList);