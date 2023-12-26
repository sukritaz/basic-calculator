const calculator = document.getElementById("calculator");
calculator.style.width = `${innerWidth / 4}px`;
calculator.style.height = `${innerWidth / 3}px`;

createNumbers();


function createNumbers() {
    const rows = document.querySelectorAll('#buttons .row');
    rows.forEach((row, index) => {
        switch (index) {
            case 0:
                appendButtonToRow(row, 'ADD', 'add', 'operation', handleOperationButtonClick);
                appendButtonToRow(row, 'SUB', 'sub', 'operation', handleOperationButtonClick);
                appendButtonToRow(row, 'MUL', 'mul', 'operation', handleOperationButtonClick);
                appendButtonToRow(row, 'DIV', 'div', 'operation', handleOperationButtonClick);
                break;
            case 1:
                appendButtonToRow(row, '1', 'num1', 'number', handleNumberButtonClick);
                appendButtonToRow(row, '2', 'num2', 'number', handleNumberButtonClick);
                appendButtonToRow(row, '3', 'num3', 'number', handleNumberButtonClick);
                appendButtonToRow(row, 'DEL', 'del', 'operation', handleOperationButtonClick);
                break;
            case 2:
                appendButtonToRow(row, '4', 'num4', 'number', handleNumberButtonClick);
                appendButtonToRow(row, '5', 'num5', 'number', handleNumberButtonClick);
                appendButtonToRow(row, '6', 'num6', 'number', handleNumberButtonClick);
                appendButtonToRow(row, '.', 'decimal', 'operation', handleOperationButtonClick);
                break;
            case 3:
                appendButtonToRow(row, '7', 'num7', 'number', handleNumberButtonClick);
                appendButtonToRow(row, '8', 'num8', 'number', handleNumberButtonClick);
                appendButtonToRow(row, '9', 'num9', 'number', handleNumberButtonClick);
                appendButtonToRow(row, '0', 'num0', 'number', handleNumberButtonClick);
                break;

        }
    })
}

function appendButtonToRow(row, buttonText, buttonId, buttonClass, clickHandler) {
    const button = document.createElement('button');
    button.textContent = buttonText;
    button.id = buttonId;
    button.className = buttonClass;
    button.addEventListener('click', clickHandler);
    row.appendChild(button);
}

function add(a, b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a, b ){
    return b == 0 ? NaN : a/b;
}

function handleNumberButtonClick() {
    
}

function handleOperationButtonClick() {
    
}