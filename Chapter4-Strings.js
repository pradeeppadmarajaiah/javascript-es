let firstName = "Pradeep"
let lastName = "P"
let result;

result = 'That\'s my name : ' + firstName + " " + lastName; //Template strin plus escaping
result = `That's name :  ${firstName} ${lastName}`;

let concatName = firstName.concat(' ' + lastName);
result = `That's my name :  ${concatName}`;

result = result.length;

result = firstName.toLowerCase();

result = firstName.charAt(5)

result = firstName.substr(1, 4);

result = firstName.slice(1, 4);

result = firstName.replace("Pra", "Deep")

console.log(result);


var name = "Pradeep P";
console.log(typeof name)

console.log(name.startsWith('Pra'));
console.log(name.endsWith('Pra'));
console.log(name.toLowerCase().includes('Pra'));
name = 'raj'
console.log(name.padStart(5, 0)) //5 is the length of a result string
console.log(name.padStart(5, 00))
console.log(name.padStart(5, 0000))
console.log(name.padEnd(5, 0000))

console.log(name.repeat(3))

var printWelcome = function () {
    return "Welcome to scripting world";
}

var printHi = () => {
    return "Hi";
}
let score=91;
console.log(`Via Template string : 
${printHi()} ${firstName} ${lastName} , ${printWelcome()}.
${score > 90 ? 'You scored A++' : "You scored A"}
`);
