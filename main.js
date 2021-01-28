let buttons = document.querySelectorAll("button")


for (let button of buttons) {
  button.addEventListener('click',event => {
      const target = event.target;
    
    if (target.classList.contains("operator")) {
       inputOperator(target.value);
       updateDisplay();
        return;
    }
    if (target.classList.contains("decimal")) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains("clear")) {
        inputClear(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains("equal")) {
        inputEqual();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
  })
}


let displayValue = "0"


function inputDigit(digit) {
    if (displayValue === '0') {
        displayValue = digit
    } else {
        displayValue = displayValue + digit
    }
}

function inputDecimal(dot) {
    if (!displayValue.includes(dot)) {
        displayValue = displayValue + dot;
    }
}

function inputOperator(operator) {
    displayValue = displayValue + operator;
}

function inputClear() {
    displayValue = "0";
}

function inputEqual() {
   displayValue = eval(displayValue);
}

function updateDisplay () {
    const display = document.querySelector(".calcdisplay");
    display.value = displayValue;
}



