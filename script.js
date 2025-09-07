const display = document.getElementById('display');

// Append numbers
function appendNumber(number) {
  if (display.value === '0') display.value = '';
  display.value += number;
}

// Append operators
function appendOperator(operator) {
  display.value += operator;
}

// Append dot
function appendDot() {
  if (!display.value.endsWith('.') && !display.value.includes('.')) {
    display.value += '.';
  } else {
    display.value += '.';
  }
}

// Clear display
function clearDisplay() {
  display.value = '';
}

// Backspace
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Calculate
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || '+-*/().'.includes(e.key)) {
    display.value += e.key;
  } else if (e.key === 'Enter') {
    calculateResult();
  } else if (e.key === 'Backspace') {
    backspace();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
