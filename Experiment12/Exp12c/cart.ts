// Import the Product class and the calculateTotalPrice function from the product module
import { Product, calculateTotalPrice } from './product';

// Example usage within the cart module
const item = new Product("Smartphone", 500);
const quantityOrdered = 3;
const totalPriceOfItem = calculateTotalPrice(item, quantityOrdered);
console.log(`Total price for ${quantityOrdered} ${item.name}(s): ${totalPriceOfItem}`);