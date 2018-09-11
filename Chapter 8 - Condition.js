let id = 100
let idV = 100
idV = '100'


if (id == idV) {
    console.log(true)
} else {
    console.log(false)
}

//value and type
if (id === idV) {
    console.log(true)
} else {
    console.log(false)
}

console.log((id === idV) ? "Crap" : "Cool");

month = new Date().getMonth()

switch (month) {
    case 5:
        console.log("JUNE")
        break;
    case 6:
        console.log("JULY")
        break;
    default:
        console.log("Jan")
        break;
}

for (let index = 1; index < 10; index++) {
    if (index == 4) continue;
    if (index == 6) break;
    console.log(index);
}

let a = 3;
do { console.log("Default"); a--; }
while (a > 1) {
    console.log("HI : " + a);
}

let days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];

days.forEach((day) => {
    console.log(day);
});

days.forEach(function (day) {
    console.log(day);
});

var numbers = days.map((day) => day.length)

console.log(numbers)

let employees = {
    employeeDetails: {
        employee1: {
            firstName: 'Pradeep',
            lastName: 'P',
            skills: 'JS'
        },
        employee2: {
            firstName: 'Hitesh',
            lastName: 'P',
            skills: 'BC'
        }
    },
    companyDetais: {
        companyName: 'ABC'
    }
}

for (let i in employees.employeeDetails.employee1) {
    console.log(`${i} = ${employees.employeeDetails.employee1[i]}`);
}

for (let i in employees.employeeDetails) {
    let employee = employees.employeeDetails[i];
    for (let v in employee) {
        console.log(`${v} = ${employee[v]}`)
    }
}