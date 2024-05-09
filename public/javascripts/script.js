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
    
    const result = Math.sin(x);
    const x = parseFloat(displayValue);
    displayValue = result.toString();
    updateDisplay();
}

function calculateCosine() {
    
    const result = Math.cos(x);
    const x = parseFloat(displayValue);
    displayValue = result.toString();
    updateDisplay();
}

function calculateTangent() {
    
    const result = Math.tan(x);
    const x = parseFloat(displayValue);
    displayValue = result.toString();
    updateDisplay();
}

function calculateSquareRoot() {
    
    const result = Math.sqrt(x);
    const x = parseFloat(displayValue);
    displayValue = result.toString();
    updateDisplay();
}

function calculateCubeRoot() {
    
    const result = Math.cbrt(x);
    const x = parseFloat(displayValue);
    displayValue = result.toString();
    updateDisplay();
}
function calculatePower() {
    const values = displayValue.split('^');
    if (values.length === 2) {
        const base = parseFloat(values[0]);
        const exponent = parseFloat(values[1]);
        const result = Math.pow(base, exponent);
        displayValue = result.toString();
        updateDisplay();
    } else {
        displayValue = 'Error';
        updateDisplay();
    }
}