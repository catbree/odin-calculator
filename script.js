console.log("Hello World!");

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

const operate = (a,b,operator) => {
    switch (operator) {
        case "+":
            return parseFloat(add(a,b).toFixed(3));
        case "-":
            return parseFloat(subtract(a,b).toFixed(3));
        case "x":
            return parseFloat(multiply(a,b).toFixed(3));
        case "/":
            return parseFloat(divide(a,b).toFixed(3));
    }
};

const calculatorDisplay = document.querySelector("#calculatorDisplay");
calculatorDisplay.textContent = "";

let firstValue = null;
let operator = "";
let secondValue = null;

const allButtons = document.querySelectorAll('button');

allButtons.forEach( button => {
    button.addEventListener("click", () => {
        
        if (operator == "" && operator == "") {
            if (button.textContent == "1" ||
                button.textContent == "2" ||
                button.textContent == "3" ||
                button.textContent == "4" ||
                button.textContent == "5" ||
                button.textContent == "6" ||
                button.textContent == "7" ||
                button.textContent == "8" ||
                button.textContent == "9" ||
                button.textContent == "0") {
                console.log(`First value being inputted`);
                calculatorDisplay.textContent += button.textContent;
                firstValue = calculatorDisplay.textContent;
            }
        }

        if (firstValue!==null && operator == "") {
            if (button.textContent == "/" ||
                button.textContent == "x" ||
                button.textContent == "-" ||
                button.textContent == "+") {
                    console.log(`${button.id} was clicked,Operator inputted`);
                    operator = button.textContent;
            }
        }

        if (firstValue!==null && operator!=="") {
            
            if ((secondValue==null) && (button.textContent == "1" ||
                button.textContent == "2" ||
                button.textContent == "3" ||
                button.textContent == "4" ||
                button.textContent == "5" ||
                button.textContent == "6" ||
                button.textContent == "7" ||
                button.textContent == "8" ||
                button.textContent == "9" ||
                button.textContent == "0")) {
                    console.log(`Second value being inputted`);
                    calculatorDisplay.textContent = button.textContent;
                    secondValue = calculatorDisplay.textContent;
            }

            else if ((secondValue!==null) && (button.textContent == "1" ||
                button.textContent == "2" ||
                button.textContent == "3" ||
                button.textContent == "4" ||
                button.textContent == "5" ||
                button.textContent == "6" ||
                button.textContent == "7" ||
                button.textContent == "8" ||
                button.textContent == "9" ||
                button.textContent == "0")) {
                    console.log(`Second value being inputted`);
                    calculatorDisplay.textContent += button.textContent;
                    secondValue = calculatorDisplay.textContent;
            }
            
        }

        if((firstValue!==null && secondValue!==null && operator!=="") && 
           (button.textContent == "/" ||
            button.textContent == "x" ||
            button.textContent == "-" ||
            button.textContent == "+")) {
                calculatorDisplay.textContent = operate(+firstValue,+secondValue,operator);
                console.log(`clicked on ${button.textContent} answer is ${operate(+firstValue,+secondValue,operator)}`);
                firstValue = calculatorDisplay.textContent;
                secondValue = null;
                operator = button.textContent;
        }

        if(button.textContent=="=") {
            calculatorDisplay.textContent = operate(+firstValue,+secondValue,operator);
            console.log(`answer is ${operate(+firstValue,+secondValue,operator)}`);
            firstValue = calculatorDisplay.textContent;
            secondValue = null;
            operator = "";
        }



    })
})