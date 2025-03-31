// declaring an interface
interface Product {
    productId: number ;
    productName: string ;
}

// logic to display the Product details with interface object as parameter
function getProductDetails(prodobj: Product): string {
    return 'The product name is : ' + prodobj.productName;
}

// declaring a variable having interface properties
const product1 = {productId: 1001, productName: 'Mobile'};

// declaring variable and invoking Product details function
const productDetails: string = getProductDetails(product1);

// line to populate the created product on console
console.log(productDetails);