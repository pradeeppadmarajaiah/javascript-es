let getPrint = function (input) {
    console.log(`Via Normal.Hi ${input}`)
}

getPrint("Pradeep");

getPrint = (input) => {
    console.log(`via Arrow. Hi ${input}`)
}

getPrint("Chandu");

getPrint = (input) => console.log(`via online Arrow. Hi ${input}`)

getPrint("Deepu");

getName = () => {
    return "Pradeep"
}

//or
getName = () => {
    "Pradeep"
}


let getObject = () => ({
    name: "deep",
    age: 30
});

console.log(getObject())

getObject = () => {
    return {
        name: "deep",
        age: 30
    }
};

console.log(getObject())

//Two Parameters requires paranthesis
let createObject = (name, age) => ({
    name: name,
    age: age
});


let users = ["PRadeep", "deep", "Raju"];

let userCount = users.map((user) => user.length)
console.log(userCount);