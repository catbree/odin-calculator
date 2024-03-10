console.log("Hello World!");

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

const operate = (a,b,operator) => {
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
};

const calculatorDisplay = document.querySelector("#calculatorDisplay");
calculatorDisplay.textContent = "0";
const displayValue = calculatorDisplay;

const allButtons = document.querySelectorAll("button");

allButtons.forEach( button => {
    button.addEventListener("click", () => {
        console.log(`${button.id} was clicked`)
        calculatorDisplay.textContent = button.textContent;
    })
})