let display = document.getElementById('display');
let resultDisplay = document.getElementById('result');
let displayValue = '0';

function updateDisplay() {
    display.textContent = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    resultDisplay.textContent = 'Result';
    updateDisplay();
}

function deleteLastChar() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        // Replace ^ with ** for power operation
        let expression = displayValue.replace(/\^/g, '**');
        
        // Evaluate the expression
        let result = eval(expression);
        
        // Handle division by zero
        if (!isFinite(result)) {
            resultDisplay.textContent = 'Error';
        } else {
            // Round to 10 decimal places to avoid floating point errors
            result = Math.round(result * 10000000000) / 10000000000;
            resultDisplay.textContent = result;
            displayValue = result.toString();
            updateDisplay();
        }
    } catch (error) {
        resultDisplay.textContent = 'Error';
        console.error('Calculation error:', error);
    }
}

// Initialize display
updateDisplay();