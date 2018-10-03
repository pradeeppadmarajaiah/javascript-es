document.querySelector('.get-jokes').addEventListener('click', loadJokes)

function loadJokes(e) {

  // create request
  const xhr = new XMLHttpRequest();
  // const numberOfJokes = document.getElementById("number").value;
  const numberOfJokes = document.getElementById("number").value;

  xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

  xhr.onload = function() {

    let jokes = JSON.parse(this.responseText);
    let result = '';
    if (jokes.type === 'success') {
      jokes.value.forEach((joke) => {
        result += `<li>${joke.joke} </li>`
      });
      document.getElementById("jokes").innerHTML = result;
    } else {
      result += `<li>Something went wrong </li>`;
    }
  }
  xhr.send();
  e.preventDefault();
}
