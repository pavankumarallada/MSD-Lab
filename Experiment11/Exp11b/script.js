// Class for Product
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
// Array to hold Product objects
var productList = [];
// Create Product objects by directly assigning properties
var product1 = {
    productId: 101,
    productName: "Smartphone",
    categoryName: "Electronics",
    quantity: 50,
    inStock: true,
};
var product2 = {
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
