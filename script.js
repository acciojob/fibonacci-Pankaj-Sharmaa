 JavaScript code (fibonacci.js)
function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }

    let a = 0, b = 1, c;

    for (let i = 2; i <= num; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return b;
}

function calculateFibonacci() {
    const numInput = document.getElementById('numInput');
    const resultElement = document.getElementById('result');

    const num = parseInt(numInput.value);

    if (isNaN(num) || num < 0 || num > 50) {
        resultElement.textContent = 'Please enter a valid number between 0 and 50.';
    } else {
        const result = fibonacci(num);
        resultElement.textContent = `The ${num}th Fibonacci number is: ${result}`;
    }
}
