

let varA;
let varB;
let operator;
let expression = []
let total = 0

const clearBtn = document.querySelector("#buttons #clear");
const equalsBtn = document.querySelector("#buttons #equals");
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
        if (isNaN(element.textContent))
            displayText += ' ' + element.textContent + ' ';
        else
            displayText += element.textContent;
        display.textContent = displayText;
    });
});

clearBtn.addEventListener("click", () => {
    displayText = ""
    display.textContent = displayText
});

equalsBtn.addEventListener("click", () => {
    vals = displayText.trim().split(' ')
    if (vals.length !== 3) {
        display.textContent = "Syntax ERROR"
        displayText = ""
        return
    }
    if (!(!isNaN(vals[0]) && isNaN(vals[1]) && !isNaN(vals[2]))){
        display.textContent = "Syntax ERROR"
        displayText = ""
        return
    }
    let equals = operate(Number(vals[0]), Number(vals[2]), vals[1])
    displayText = equals
    display.textContent = displayText
});
