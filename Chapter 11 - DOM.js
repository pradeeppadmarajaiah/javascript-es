let val;

val = document;

//array way
val = document.all
val = val[8]
val = document.all.length
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;

val = document.forms
val = document.forms[0].id


val = document.links;
val = document.links[0].className;

val = document.images;

val = document.scripts;
val = document.scripts[0].getAttribute("integrity");

val = document.scripts;

//convert to array
val = Array.from(val);

val.forEach((value) => (console.log(value)));


console.log(val);