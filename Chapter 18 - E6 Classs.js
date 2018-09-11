class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  displayFullName() {
    return `Hello ${this.fName} ${this.lName}`;
  }

  changeLastName(newLastName) {
    this.lName = newLastName;
  }

  static add(x, y) {
    console.log(`Add of ${x} and ${y} is ${x + y}`);
  }
}

const deepu = new Person("Pradeep", "P")
console.log(deepu);

console.log(deepu.displayFullName());

deepu.changeLastName("Padmarajaiah");
console.log(deepu.displayFullName());

//static
Person.add(1, 2)

class Employee extends Person {
  constructor(fName, lName, companyName) {
    super(fName, lName);
    this.companyName = companyName;
  }

  displayFullNameWithCompany() {
    console.log(`Hello ${this.fName} ${this.lName}. Welcome to ${this.companyName}`);
  }
}

const employee1 = new Employee("Pradeep", "P", "IBM")
console.log(employee1.displayFullName());
employee1.displayFullNameWithCompany()

employee1.changeLastName("Jain")
employee1.displayFullNameWithCompany()

Employee.add(4,5);
