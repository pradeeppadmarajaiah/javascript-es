//User Constructor

function User(name, age) {
  this.name = name;
  this.age = age

  this.printUserDetails = () => {
    console.log(`Hello ${this.name}. Your entered age is ${this.age}`);
  }

}

var pradeep = new User("Pradeep", 29);
var hitesh = new User("Hitesh", 23)

pradeep.printUserDetails();

//Built in Constructor
name = 'Pradeep'
console.log(`Type is : ${typeof name}`)
///or new will take memory
name = new String("Pradeep")
console.log(`Type is : ${typeof name}`),

  sum = function(a, b) {
    return a + b;
  }
//or
sum = new Function('a', 'b',
  'return a+b');
employee = {
  name: 'Pradeep'
};
employee = new Object({
  name: "Pradeep"
})

console.log(employee)
