var products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
];
var handleProductSelection = function (productId) {
    var filteredProduct = products.filter(function (product) { return product.id === productId; });
    console.log(filteredProduct);
};
// Example usage
handleProductSelection(2);
