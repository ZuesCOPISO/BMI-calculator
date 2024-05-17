let sum = '';

function appendToOutput(value) {
    const output = document.getElementById('output');
    output.innerHTML += value;
}

function evaluateSum() {
    const output = document.getElementById('output');
    const result = eval(output.innerHTML);
    output.innerHTML = result;
}

function clearSum() {
    const output = document.getElementById('output');
    output.innerHTML = '';
}