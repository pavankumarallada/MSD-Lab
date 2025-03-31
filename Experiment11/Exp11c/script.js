var Product = /** @class */ (function () {
    function Product(id) {
        this.productId = id;
    }
    Product.prototype.getProductId = function () {
        return "Product id is ".concat(this.productId);
    };
    return Product;
}());
// Example usage:
var myProduct = new Product(123);
console.log(myProduct.getProductId()); // Output: Product id is 123
