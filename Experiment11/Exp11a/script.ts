// Interface for Category
interface Category {
    categoryName: string;
  }
  
  // Interface for Product
  interface Product {
    productId: number;
    productName: string;
  }
  
  // Interface for ProductList extending Category and Product
  interface ProductList extends Category, Product {
    quantity: number;
    inStock: boolean;
  }
  
  // Creating a variable of type ProductList
  const myProduct: ProductList = {
    categoryName: "Electronics",
    productId: 123,
    productName: "Laptop",
    quantity: 10,
    inStock: true,
  };
  
  // Accessing the properties of the ProductList variable
  console.log("Category Name:", myProduct.categoryName);
  console.log("Product ID:", myProduct.productId);
  console.log("Product Name:", myProduct.productName);
  console.log("Quantity:", myProduct.quantity);
  console.log("In Stock:", myProduct.inStock);