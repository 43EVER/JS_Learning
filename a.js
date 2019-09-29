let f = function () {
    return arguments[0] + arguments[1];
};

let f2 = function fuck() {
    /*
    *   你的🐎死了
    *
    */
};

console.log(Math.sqrt.toString());

let multiple = function (fn) {
    let arr = fn.toString().split('\n');
    return arr.splice(1, arr.length - 1).join('\n');
}

console.log(multiple(f2));

let fun1 = function() {
    console.log(a);
};

let fun2 = function(fuck) {
    let a = 1;
    fuck();
};

function createStatic(start) {
    return function() {
        return start++;
    };
}

let a = createStatic(5);
console.log(a());
console.log(a());
console.log(a());
console.log(a());

let aa = (function a() {return 1;}());
console.log(aa);