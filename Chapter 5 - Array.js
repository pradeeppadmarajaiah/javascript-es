let scores=[1,2,3,4,5,6];
let scoresArray=new Array([12,12,23,12,34,67,89]);

let name=["Pradeep","Raj","chethan","Hitesh"]

details=["Pradeep","P","India","Architect",560017]

let result;
result=scores.length;
result=Array.isArray(scores);
result=scores[2];
result=scores.indexOf(23);

scores[8]=100;


scores.push(101)//adding at last
scores.unshift(120)//adding at front
result=scores

scores.pop()//remove last
scores.shift()//remove first

scores.splice(1,3)//remove from range . removes first 3numbers starting from position 1


result=scores

result=scores.concat(scoresArray)

scores=[1,2,3,4,5,6];
result=scores.find((a)=>{return a > 1});
result=scores.reverse()
result=scores.sort()

console.log(result)