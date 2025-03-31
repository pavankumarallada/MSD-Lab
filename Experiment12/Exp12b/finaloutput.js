var ProductUtility;
(function (ProductUtility) {
    var Productclass = /** @class */ (function () {
        function Productclass(id, name) {
            this.productId = id;
            this.productName = name;
        }
        return Productclass;
    }());
    ProductUtility.Productclass = Productclass;
})(ProductUtility || (ProductUtility = {}));
/// <reference path="product.ts" />
// Using the namespace and the Product class within it
var productList = [];
// Create Product objects using the namespaced class
var product1 = new ProductUtility.Productclass(101, "Laptop");
var product2 = new ProductUtility.Productclass(202, "Book");
var product3 = new ProductUtility.Productclass(303, "Eraser");
// Add products to the productList array
productList.push(product1);
productList.push(product2);
productList.push(product3);
// Use the Product objects
productList.forEach(function (product) {
    console.log("Product ID: ".concat(product.productId));
    console.log("Product Name: ".concat(product.productName));
});
