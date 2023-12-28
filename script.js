const calculator = document.getElementById("calculator");
calculator.style.width = `${innerWidth / 4}px`;
calculator.style.height = `${innerWidth / 3}px`;
let number = [];
let expression = [];
let expressionString = "";
const displayOperationElem = document.getElementById("display-operation");

createNumbers();
document.getElementById("clear").onclick = handleButtonClick.bind(null,'clear');


function createNumbers() {
    const rows = document.querySelectorAll('#buttons .row');
    rows.forEach((row, index) => {
        switch (index) {
            case 0:
                appendButtonToRow(row, 'ADD', 'add', 'operation', handleButtonClick.bind(null, '+'));
                appendButtonToRow(row, 'SUB', 'sub', 'operation', handleButtonClick.bind(null, '-'));
                appendButtonToRow(row, 'MUL', 'mul', 'operation', handleButtonClick.bind(null, '*'));
                appendButtonToRow(row, 'DIV', 'div', 'operation', handleButtonClick.bind(null, '/'));
                break;
            case 1:
                appendButtonToRow(row, '1', 'num1', 'number', handleButtonClick.bind(null, 1));
                appendButtonToRow(row, '2', 'num2', 'number', handleButtonClick.bind(null, 2));
                appendButtonToRow(row, '3', 'num3', 'number', handleButtonClick.bind(null, 3));
                appendButtonToRow(row, 'DEL', 'del', 'operation', handleButtonClick.bind(null, 'DEL'));
                break;
            case 2:
                appendButtonToRow(row, '4', 'num4', 'number', handleButtonClick.bind(null, 4));
                appendButtonToRow(row, '5', 'num5', 'number', handleButtonClick.bind(null, 5));
                appendButtonToRow(row, '6', 'num6', 'number', handleButtonClick.bind(null, 6));
                appendButtonToRow(row, '=', 'evaluate', 'operation', handleButtonClick.bind(null, '='));
                break;
            case 3:
                appendButtonToRow(row, '7', 'num7', 'number', handleButtonClick.bind(null, 7));
                appendButtonToRow(row, '8', 'num8', 'number', handleButtonClick.bind(null, 8));
                appendButtonToRow(row, '9', 'num9', 'number', handleButtonClick.bind(null, 9));
                appendButtonToRow(row, '0', 'num0', 'number', handleButtonClick.bind(null, 0));
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

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b == 0 ? NaN : a / b;
}


function handleButtonClick(value) {

    if ('1234567890'.includes(value)) {
        expressionString += value;
    }
    else if ('+-/*'.includes(value)) {
        '+-/*'.includes(expressionString.charAt(expressionString.length-1)) ?
            alert("Please enter a number before two consecutive operations.") :
            expressionString += value;
    }

    else if ("DEL" === value) {
        expressionString = expressionString.slice(0, -1);
    }

    else if("clear"===value) {
        expressionString = "";
    }

    displayOperationElem.textContent = expressionString;
}