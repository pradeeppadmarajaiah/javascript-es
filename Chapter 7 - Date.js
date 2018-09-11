let date;

date=new Date();

date=date.toString();
console.log(date)
console.log(typeof date)

date=new Date(date)
month=date.getMonth()

console.log(`Current Month is : ${month}. Current date : ${date.getDate()}` ) // June = 5


date.setDate(2)
date.setMonth(01)
date.setFullYear(2222)


console.log(date)
//console.log(typeof date)