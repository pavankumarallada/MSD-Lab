// Implementing the function that matches the interface using a normal function
var createCustomerID = function (name, id) {
    return "The customer name is ".concat(name, " and id is ").concat(id);
};
// Using the interface reference to call the function
var customerId = createCustomerID('Pavan Kumar', 101);
// Outputting the customer details
console.log(customerId);
