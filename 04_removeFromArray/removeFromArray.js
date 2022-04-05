const removeFromArray = function (initialArray /**/ ) {
    // accept an initial array and arguments that might be elements in the array
    // find the index of the element that matches each argument in the initial array
    // remove the elements at those indexes
    // return the new array

    for (let i = 1; i < arguments.length; i++) {
        let indexToRemove = initialArray.indexOf(arguments[i]);
        if (indexToRemove != -1) initialArray.splice(indexToRemove, 1);
    }
    return initialArray;
}

// Do not edit below this line
module.exports = removeFromArray;