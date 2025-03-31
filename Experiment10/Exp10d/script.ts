// Declaring an interface with a function type
interface StringGenerator {
    (name: string, id: number): string;
  }
  
  // Implementing the function that matches the interface using a normal function
  const createCustomerID: StringGenerator = function(name: string, id: number): string {
    return `The customer name is ${name} and id is ${id}`;
  };
  
  // Using the interface reference to call the function
  const customerId: string = createCustomerID('Pavan Kumar', 101);
  
  // Outputting the customer details
  console.log(customerId);