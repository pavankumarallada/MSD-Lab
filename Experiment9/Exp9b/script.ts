type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

const handleProductSelection = (productId: number) => {
  const filteredProduct = products.filter((product) => product.id === productId);
  console.log(filteredProduct);
};

// Example usage
handleProductSelection(2);
