let value = document.getElementsByTagName("collection-item");

value = document.querySelectorAll('li:nth-child(even)')

value.forEach((val, index) => {
    val.style.background = 'red';
})

value = document.querySelector('ul#collection1');
//Get child nodes will have elements plus line breaks
console.log("Get child nodes will have elements plus line breaks : " + value.childNodes.length)

//Get only children elements
console.log("Get only children elements : " + value.children.length)
let children=value.children;
children[1].textContent="Pradeep";


let valueList = value.querySelectorAll('li.collection-item');



console.log(valueList.length)

console.log()
