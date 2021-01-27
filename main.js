let buttons = document.querySelectorAll("button")


for (let button of buttons) {
  button.addEventListener('click',event => {
      const target = event.target;
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        console.log("operator", target.value);
        return;
    }
    if (target.classList.contains("decimal")) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains("clear")) {
        console.log("clear", target.value);
        return;
    }

    inputDigit(target.value);
    updateDisplay();
  })
}




const calculator = {
    displayValue: "0",
    firstOperand: null,
    waitingForsecondOperand: false,
    operator: null
};

function inputDigit(digit) {
    let {displayValue} = calculator;
    if (displayValue === '0') {
        calculator.displayValue = digit
    } else {
        calculator.displayValue = displayValue + digit
    }
}

function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue = calculator.displayValue + dot;
    }
}


function updateDisplay () {
    const display = document.querySelector(".calcdisplay");
    display.value = calculator.displayValue;
}



