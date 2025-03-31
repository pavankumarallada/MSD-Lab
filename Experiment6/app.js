function operateOnNumber(num, operation) {
    return operation(num);
}

function square(x) {
    return x * x;
}

const result = operateOnNumber(6, square); 
console.log(result); // Output: 25