//Function declarations
function add(a = 1, b = 1) {
    return a + b;
}


//Function expression
let sub = function sub(a, b) {
    return a - b;
}

let multiply = (a = 3, b = 4) => { return a * b; }

(() => { console.log(`Immediately Invokable Function Expressions`); })();
((skill) => { console.log(`Immediately Invokable Function Expressions : ${skill}`); })('BC');
(function(name){ console.log(`Immediately Invokable Function Expressions type 2 : ${name}`); })('Pradeep');

let math= {
    square : (a) => {return a*a;},
    sqrt : (a) => {return Math.sqrt(a)}
};

math.add=add;

console.log(math.square(2));
console.log(math.sqrt(3));
console.log(math.add(34,4))

console.log(add());
console.log(add(23, 23));
console.log(sub(23, 23));
console.log(multiply());
console.log(multiply(23, 23));
