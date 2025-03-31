/// <reference path="./product.ts" />

// Using the namespace and the Product class within it
const productList: ProductUtility.Productclass[] = [];

// Create Product objects using the namespaced class
const product1 = new ProductUtility.Productclass(101, "Laptop");
const product2 = new ProductUtility.Productclass(202, "Book");
const product3 = new ProductUtility.Productclass(303, "Eraser");

// Add products to the productList array
productList.push(product1);
productList.push(product2);
productList.push(product3);

// Use the Product objects
productList.forEach(product => {
  console.log(`Product ID: ${product.productId}`);
  console.log(`Product Name: ${product.productName}`);  
});