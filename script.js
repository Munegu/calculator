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

    console.log(array);

    array.forEach(number => {
        result /= number;
    });
    return result;
}

