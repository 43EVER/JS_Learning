let counter = function (arr) {
    return `There are ${arr.length} items.`;
};

let adder = function (a, b) {
    return `the sum of ${a} and ${b} is ${a + b}`;
};

module.exports = {
    counter: counter,
    adder: adder
};
