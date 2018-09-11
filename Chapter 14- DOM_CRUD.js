let newLi = document.createElement('li');

newLi.className = 'collection-item';
newLi.id = 'new Id'
newLi.setAttribute('title', 'Title value');

newLi.appendChild(document.createTextNode("Pradeepp"))
//newLi.textContent="Pradeep";

//append to collection
document.querySelector('ul.collection').appendChild(newLi);


let list=document.querySelector('ul.collection').children;
console.log(`Current list length : ${list.length}`)

list[1].remove();
console.log(`After removing length : ${list.length}`)



console.log(newLi)