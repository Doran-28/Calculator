

let varA;
let varB;
let operator;

add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
};

function operate(a, b, operator){
    return operations[operator](a, b);
}

console.log(operate(2, 6, "-"))