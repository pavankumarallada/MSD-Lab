// Define a class for a Product
class Product {
    name: string;
    price: number;
  
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  }
  
  // Function to calculate the total price of a product based on quantity
   function calculateTotalPrice(product: Product, quantity: number): number {
    const totalPrice = product.price * quantity;
    return totalPrice;
  }

  export {Product,calculateTotalPrice};