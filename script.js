const calculator = document.getElementById("calculator");
calculator.style.width = `${innerWidth/3}px`;
calculator.style.height = `${innerWidth/3}px`;

createNumbers();

function appendButtonToRow(row, buttonText, buttonId, buttonClass) {
    const button = document.createElement('button');
    button.textContent = buttonText;
    button.id = buttonId;
    button.className = buttonClass;
    row.appendChild(button);
}
function createNumbers () {
    const rows = document.querySelectorAll('#buttons .row');
    rows.forEach((row, index) => {
        switch(index) {
            case 0:
                appendButtonToRow(row, 'ADD', 'add', 'operation');
                appendButtonToRow(row, 'SUB', 'sub', 'operation');
                appendButtonToRow(row, 'MUL', 'mul', 'operation');
                appendButtonToRow(row, 'DIV', 'div', 'operation');
                break;
            case 1:
                appendButtonToRow(row, '1', 'num1', 'number');
                appendButtonToRow(row, '2', 'num2', 'number');
                appendButtonToRow(row, '3', 'num3', 'number');
                appendButtonToRow(row, 'DEL', 'del', 'operation');
                break;
            case 2:
                appendButtonToRow(row, '4', 'num4', 'number');
                appendButtonToRow(row, '5', 'num5', 'number');
                appendButtonToRow(row, '6', 'num6', 'number');
                appendButtonToRow(row, '.', 'decimal', 'operation');
                break;
            case 3:
                appendButtonToRow(row, '7', 'num7', 'number');
                appendButtonToRow(row, '8', 'num8', 'number');
                appendButtonToRow(row, '9', 'num9', 'number');
                appendButtonToRow(row, '0', 'num0', 'number');
                break;

        }
    })
}