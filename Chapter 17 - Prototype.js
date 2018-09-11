function User(fName, lName, age,) {
  this.fName = fName;
  this.lName = lName;
  this.age = age
}

//inside parent method
User.prototype.printUserDetails = function() {
  console.log(`Hello ${this.fName} ${this.lName} . Your entered age is ${this.age}`);
};

const user1 = new User("Pradeep", "P", 29)

User.prototype.changeLName = function(newLName) {
  this.lName = newLName;
};

console.log(user1)
user1.printUserDetails();

user1.changeLName("Padmarajaiah");
console.log(user1)
user1.printUserDetails();

//Inhertance
function Employee(fName, lName, age, companyName) {
  User.call(this, fName, lName, age);
  this.companyName = companyName;
}

Employee.prototype = Object.create(User.prototype);
const employee1 = new Employee("Raj", "P", 34, "IBM");
employee1.printUserDetails();

Employee.prototype.printUserDetails = function() {
  console.log(`Hello ${this.fName} ${this.lName} . Welcome to  ${this.companyName}`);
}
employee1.printUserDetails();
