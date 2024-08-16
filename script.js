

let varA;
let varB;
let operator;

const display = document.querySelector("#display #text");
let displayText = display.textContent

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

const buttons = Array.from(document.querySelectorAll('#buttons > button')).filter((element) => !element.id);

buttons.forEach(element => {
    element.addEventListener("click", () => {
        displayText += element.textContent
        display.textContent = displayText
    });
});

const clearBtn = document.querySelector("#buttons #clear");
const equalsBtn = document.querySelector("#buttons #equals");

clearBtn.addEventListener("click", () => {
    displayText = ""
    display.textContent = displayText
});

equalsBtn.addEventListener("click", () => {
    displayText = ""
    display.textContent = displayText
});
