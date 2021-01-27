let buttons = document.querySelectorAll("button")


for (let button of buttons) {
  button.addEventListener('click',event => {
      const {target} = event;
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        console.log("operator", target.value);
        return;
    }
    if (target.classList.contains("decimal")) {
        console.log("decimal", target.value);
        return;
    }
    if (target.classList.contains("clear")) {
        console.log("clear", target.value);
        return;
    }
  })
}

const calculator = {
    displayValue: "0",
    firstOperand: null,
    waitingForsecondOperand: false,
    operator: null
};

function updateDisplay () {
    const display = document.querySelector(".calcdisplay");
    display.value = calculator.displayValue;
}
updateDisplay();
function dosomething() {

}

