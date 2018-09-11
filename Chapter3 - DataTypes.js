var name = "pradeep"
console.log('name :' + typeof name);
var age = 23
console.log('age :' + typeof age);
var isManager = false
console.log('isManager :' + typeof isManager);
var company = null;
console.log('company :' + typeof company);
var skills;
console.log('skills :' + typeof skills);
var symbolVal=Symbol();
console.log('symbolVal :' + typeof symbolVal);
skills={name:"Hitesh"};
console.log('skills :' + typeof skills);
const now =new Date();
console.log('now :' + typeof now);

//Type conversion
var value=String(40+40);
value=String(new Date());
value=String([12,32,234,234,234234,1]);
value=(2).toString();//toString() : will throw error when the value is null
value=Number("3");
value=Number(true)

console.log(value)
console.log(value.toFixed(2))



value=parseInt("1234fdfgddf");
console.log("Parse Int with number: "+value)
value="d";
console.log("Parse Int with aplha: "+parseInt(value))

value=Math.abs(-99);
value=Math.sqrt(9000);
value=Math.round(8.90);
value=Math.min(12,34,345,132,324,1)
value=Math.round(Math.random())


