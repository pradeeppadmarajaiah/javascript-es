let output = document.getElementById("task-title");

output = output.className;
output = output.id;


document.getElementById("task-title").style.background = '#333'
document.getElementById("task-title").style.color = '#fff'
document.getElementById("task-title").style.padding = '5px'

document.getElementById("task-title").textContent = "New Value"
document.getElementById("task-title").innerText = "New Value 1"

document.getElementById("task-title").innerHTML = "<p>Task List</p>";

output = document.getElementById("task-title");

//New type of fetching
output = document.querySelector("#task-title");
output = document.querySelector(".card-title");
//Fetches first h5
output = document.querySelector("h5");

//Fetches all h5
output = document.querySelectorAll("ul li");

document.querySelector("li:last-child").style.color = "red"
document.querySelector("li:nth-child(1)").textContent = "Deepu"

///document.querySelectorAll("li:nth-child(odd)").style.background="#f4f4f4"

//Fetches all div
output = document.querySelectorAll("div");

console.log(output);