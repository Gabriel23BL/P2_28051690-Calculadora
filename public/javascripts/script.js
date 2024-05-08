let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function add() {
    displayValue += '+';
    updateDisplay();
}

function subtract() {
    displayValue += '-';
    updateDisplay();
}

function multiply() {
    displayValue += '*';
    updateDisplay();
}

function divide() {
    displayValue += '/';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function calculateSine() {
    const x = parseFloat(displayValue);
    const result = Math.sin(x);
    displayValue = result.toString();
    updateDisplay();
}

function calculateCosine() {
    const x = parseFloat(displayValue);
    const result = Math.cos(x);
    displayValue = result.toString();
    updateDisplay();
}

function calculateTangent() {
    const x = parseFloat(displayValue);
    const result = Math.tan(x);
    displayValue = result.toString();
    updateDisplay();
}

function calculateSquareRoot() {
    const x = parseFloat(
displayValue);
    const result = Math.sqrt(x);
    displayValue = result.toString();
    updateDisplay();
}

function calculateCubeRoot() {
    const x = parseFloat(displayValue);
    const result = Math.cbrt(x);
    displayValue = result.toString();
    updateDisplay();
}
