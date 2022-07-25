numberValue = null;
operatorValue = null;
number1 = null;

const add = function(array) {
    if (0 === array.length) {
        return;
    }

    if (1 === array.length) {
        return array[0];
    }
    result = 0;
    array.forEach(number => {
        result += number;
    });
    return result;
}

const substract = function(array) {
    if (0 === array.length) {
        return;
    }

    if (1 === array.length) {
        return array[0];
    }

    result = array[0];

    array.shift();

    array.forEach(number => {
        result -= number;
    });
    return result;
}

const multiply = function(array) {
    if (0 === array.length) {
        return;
    }

    if (1 === array.length) {
        return array[0];
    }
    var result = 1;
      array.forEach(element => {
      result *= element;
    });
    return result;
  };

const divide = function(array) {
    if (0 === array.length) {
        return;
    }

    if (1 === array.length) {
        return array[0];
    }

    result = array[0];

    array.shift();


    array.forEach(number => {
        result /= number;
    });
    return result;
}

const operate = function(operator, number1, number2) {
    switch (operator.toLowerCase()) {
        case '+':
        return add([number1, number2]);
        case '-':
        return substract([number1, number2]);
        case 'x':
        return multiply([number1, number2]);
        case '/':
        return divide([number1, number2]);
        default:
        return;
    }
}

const getNumber = (number) => {
    if (numberValue) {
        numberValue = numberValue.concat('', number);
        document.getElementById("response").innerHTML = numberValue;
        return;
    }
    numberValue = number;
    document.getElementById("response").innerHTML = numberValue;
}

const getOperator = (operator) => {
    operatorValue = operator;
    number1 = null !== numberValue ? parseInt(numberValue) : 0;
    numberValue = null;
    document.getElementById("response").innerHTML = numberValue;
}

const clearValue = () => {
    numberValue = null;
    document.getElementById("response").innerHTML = numberValue;
}

const clearAll = () => {
    clearValue();
    operatorValue = null;
    document.getElementById("response").innerHTML = numberValue;
}

const getOperation = () => {
    result = operate(operatorValue, number1, parseInt(numberValue));
    number1 = result;
    numberValue = result;
    document.getElementById("response").innerHTML = numberValue;
}


