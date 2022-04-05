const sumAll = function (num1, num2) {
    let finalSum = 0;

    // better way to write condition: 
    // if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (typeof (num1 && num2) != 'number' || (num1 || num2) < 0) {
        return 'ERROR'
    } else if (num1 < num2) {
        while (num1 <= num2) {
            finalSum += num1;
            num1++;
        }
    } else if (num2 < num1) {
        while (num2 <= num1) {
            finalSum += num2;
            num2++;
        }
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;