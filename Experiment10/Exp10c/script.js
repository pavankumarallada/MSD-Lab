// logic to display the Product details with interface object as parameter
// tslint:disable-next-line:adjacent-overload-signatures
function getProductDetails(prodobj) {
    return 'The product name is : ' + prodobj.productName;
}
// declaring a variable along with interface properties
var product2 = { productId: 1001, productName: 'Mobile', productCategory: 'Gadget' };
// declaring variable and invoking Product details function
var productDetails = getProductDetails(product2);
// line to populate the created product variable on console
console.log(productDetails);
