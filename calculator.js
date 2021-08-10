function sum(a, b) {
  if (!b) {
    b = 0;
  }
  if (!a) {
    a = 0;
  }
  return a + b;
}

function subtract(a, b) {
  if (b === undefined) {
    b = 0;
  }
  if (a === undefined) {
    a = 0;
  }
  return a - b;
}

function divide(a, b) {
  if (b === undefined) b = 0;
  if (a === undefined) a = 0;
   if (b === 0) {
     throw new Error('Division by 0 is not allowed');
   }
  return a / b;
}

function multiply(a, b) {
  if (b === undefined) b = 0;
  if (a === undefined) a = 0;
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
