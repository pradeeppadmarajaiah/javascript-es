document.getElementById('button1').addEventListener('click', loadText);

function loadText(e) {
  fetch('data.txt').then((res) => {
    return res.text();
  }).then((response) => {
    console.log(response)
    document.getElementById("output").innerHTML = response;
  }).catch((err) => {
    console.log(err);
  });

  e.preventDefault();
}

document.getElementById('button2').addEventListener('click', loadJson);

function loadJson(e) {
  fetch('customer.json').then((res) => {
    return res.json();
  }).then((response) => {
    console.log(response)
    document.getElementById("output").innerHTML = JSON.stringify(response);
  }).catch((err) => {
    console.log(err);
  });

  e.preventDefault();
}

document.getElementById('button3').addEventListener('click', loadAPI);
function loadAPI(e) {
  fetch('http://api.icndb.com/jokes/random/5').then((res) => {
    return res.json();
  }).then((response) => {
    let out = '';
    response.value.forEach((res) => out += `<li>${res.joke}</li>`)
    document.getElementById("output").innerHTML = "<ol>" + out + "</ol>";
  }).catch((err) => {
    console.log(err);
  });

  e.preventDefault();
}
